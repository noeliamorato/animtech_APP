import React, { useState } from "react";
import { Image } from "react-native";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const ModalMascota = ({ visible, onCancel, mascotaData }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <Text style={styles.titulo}>Detalles de la Mascota</Text>
      <View
        style={{
          ...styles.contenedor,
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          gap: 15,
        }}
      >
        <Image
          source={{
            uri: "https://efeagro.com/wp-content/uploads/2023/08/gatos_mascotas-2.jpeg",
          }}
          style={{
            width: 150,
            height: 150,
          }}
          onError={(error) => console.error("Error loading image:", error)}
        />
        <Image
          source={{
            uri: "https://veterinaria.uchile.cl/dam/jcr:b3520b6e-3c04-426f-bdd5-fc3b2593667f/poly.jpg",
          }}
          style={{
            width: 150,
            height: 150,
          }}
          onError={(error) => console.error("Error loading image:", error)}
        />
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqN0ZVmR_myGCpqccoSe0KP5QfHdF_XXxA1YJ1NYMGyalc4_rZ5SzByJXQ1OLlaAdY9s&usqp=CAU",
          }}
          style={{
            width: 150,
            height: 150,
          }}
          onError={(error) => console.error("Error loading image:", error)}
        />
      </View>
      <View style={styles.seccion}>
        <Text style={styles.seccionTitulo}>Galería</Text>
      </View>

      <View style={styles.botones}>
        <Button title="Cerrar" onPress={onCancel} />
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
