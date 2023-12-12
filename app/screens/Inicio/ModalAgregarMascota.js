import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { peticionPost } from "../../../services/postRequest";

const ModalAgregarMascota = ({ visible, onCancel }) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [raza, setRaza] = useState("");
  const [sexo, setSexo] = useState("");
  const [fechaNac, setFechaNac] = useState(null);
  const [peso, setPeso] = useState("");
  const [color, setColor] = useState("");

  const agregarMascota = async () => {
    try {
      const nuevaMascota = {
        nombre,
        tipo,
        raza,
        sexo,
        fechaNac,
        peso,
        color,
      };

      const response = await peticionPost("mascotas", nuevaMascota);

      if (response) {
        console.log("Mascota agregada:", response);
       
        alert("Mascota agregada: ");
        setNombre("");
        setTipo("");
        setRaza("");
        setSexo("");
        setFechaNac(null);
        setPeso("");
        setColor("");
      } else {
        console.error("Error al agregar mascota");
      }
    } catch (error) {
      console.error("Error al agregar mascota:", error);
    }
  };

  const renderTiposMascota = () => {
    const tiposMascota = ["perro", "gato"];
    return tiposMascota.map((item, index) => (
      <Button
        key={index}
        title={item}
        onPress={() => setTipo(item)}
        color={tipo === item ? "#6495ED" : "#aaa"}
      />
    ));
  };

  const renderSexos = () => {
    const sexos = ["macho", "hembra"];
    return sexos.map((item, index) => (
      <Button
        key={index}
        title={item}
        onPress={() => setSexo(item)}
        color={sexo === item ? "#6495ED" : "#aaa"}
      />
    ));
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Nueva Mascota</Text>

        <View style={styles.campo}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Tipo:</Text>
          <View style={styles.botonesContainer}>{renderTiposMascota()}</View>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Raza:</Text>
          <TextInput
            style={styles.input}
            value={raza}
            onChangeText={(text) => setRaza(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Sexo:</Text>
          <View style={styles.botonesContainer}>{renderSexos()}</View>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha de nacimiento:</Text>
          <TextInput
            style={styles.input}
            value={fechaNac}
            onChangeText={(text) => setFechaNac(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Peso (kg):</Text>
          <TextInput
            style={styles.input}
            value={peso}
            onChangeText={(text) => setPeso(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Color:</Text>
          <TextInput
            style={styles.input}
            value={color}
            onChangeText={(text) => setColor(text)}
          />
        </View>

        <View style={styles.botones}>
          <Button title="Cancelar" onPress={onCancel} />
          <Button title="Añadir Mascota" onPress={agregarMascota} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#F3F7F9",
    padding: 18,
    borderRadius: 10,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "600",
    color: "#446677",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  label: {
    fontSize: 16,
    color: "#446677",
    marginBottom: 6,
    fontWeight: "500",
  },

  input: {
    borderWidth: 2,
    borderColor: "#A3BFFA",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#ECF4F9",
    marginBottom: 12,
  },

  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  boton: {
    backgroundColor: "#446677",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  botonTexto: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default ModalAgregarMascota;
