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

const ModalMedicamentos = () => {
  const [medicamento, setMedicamento] = useState({
    nombre: "",
    nota: "",
  });

  const handleGuardarMedicamento = () => {
    // Aquí puedes implementar la lógica para guardar el medicamento
    console.log("Medicamento guardado:", medicamento);
    setMedicamento({
      nombre: "",
      nota: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar medicamento</Text>
      <View style={styles.iconInput}>
        <Icon
          name="local-hospital"
          size={20}
          color="#900"
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Nombre (max 50 caracteres)"
          value={medicamento.nombre}
          onChangeText={(text) =>
            setMedicamento({ ...medicamento, nombre: text.slice(0, 50) })
          }
        />
      </View>
      <View style={styles.iconInput}>
        <Icon name="note" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={[styles.textInput, styles.textArea]}
          placeholder="Nota (max 500 caracteres)"
          multiline
          numberOfLines={4}
          value={medicamento.nota}
          onChangeText={(text) =>
            setMedicamento({ ...medicamento, nota: text.slice(0, 500) })
          }
        />
      </View>
      <TouchableOpacity
        style={styles.guardarButton}
        onPress={handleGuardarMedicamento}
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
    marginBottom: 50,
  },
  iconInput: {
    flexDirection: "row",
    alignItems: "flex-end",
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
  textArea: {
    height: 100,
    textAlignVertical: "bottom",
  },
  guardarButton: {
    width: 200,
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

export default ModalMedicamentos;
