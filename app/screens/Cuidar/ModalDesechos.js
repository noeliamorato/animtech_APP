import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ModalDesechos = () => {
  const [desechos, setDesechos] = useState({
    tipo: "",
    textura: "",
    color: "",
    olor: "",
  });

  const handleGuardarDesechos = () => {
    // Aquí puedes implementar la lógica para guardar los desechos
    console.log("Desechos guardados:", desechos);
    setDesechos({
      tipo: "",
      textura: "",
      color: "",
      olor: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar desechos de mascota</Text>
      <View style={styles.iconInput}>
        <Icon name="waves." size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Tipo de desecho (excremento, orina)"
          value={desechos.tipo}
          onChangeText={(text) => setDesechos({ ...desechos, tipo: text })}
        />
      </View>
      <View style={styles.iconInput}>
        <Icon name="texture" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Textura de los desechos"
          value={desechos.textura}
          onChangeText={(text) => setDesechos({ ...desechos, textura: text })}
        />
      </View>
      <View style={styles.iconInput}>
        <Icon name="color-lens" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Color de los desechos"
          value={desechos.color}
          onChangeText={(text) => setDesechos({ ...desechos, color: text })}
        />
      </View>
      <View style={styles.iconInput}>
        <Icon name="whatshot" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Olor de los desechos"
          value={desechos.olor}
          onChangeText={(text) => setDesechos({ ...desechos, olor: text })}
        />
      </View>
      <TouchableOpacity
        style={styles.guardarButton}
        onPress={handleGuardarDesechos}
      >
        <Text style={styles.guardarButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  iconInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  guardarButton: {
    backgroundColor: "#900",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  guardarButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ModalDesechos;
