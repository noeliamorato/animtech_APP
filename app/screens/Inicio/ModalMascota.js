import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const ModalMascota = ({ visible, onCancel, mascotaData }) => {

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Detalles de la Mascota</Text>

        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>Galería</Text>
        </View>

        <View style={styles.botones}>
          <Button title="Cerrar" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
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
  seccion: {
    marginBottom: 20,
  },
  seccionTitulo: {
    fontSize: 20,
    fontWeight: "500",
    color: "#6495ED",
    marginBottom: 10,
  },
  botones: {
    marginTop: 20,
  },
});

export default ModalMascota;
