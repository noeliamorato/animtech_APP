import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Asegúrate de tener instalado el paquete de iconos

const ModalOrdenes = ({ visible, onCancel, onConfirm }) => {
  const [selectedCategory, setSelectedCategory] = useState("Basicos");

  const basicos = [
    { nombre: "Sentarse", imagen: require("./imgordenes/obediencia.jpg") },
    { nombre: "Acostarse", imagen: require("./imgordenes/obediencia.jpg") },
    { nombre: "Levantarse", imagen: require("./imgordenes/obediencia.jpg") },
    { nombre: "No Moverse", imagen: require("./imgordenes/obediencia.jpg") },
    { nombre: "Venir", imagen: require("./imgordenes/obediencia.jpg") },
    { nombre: "Buscar", imagen: require("./imgordenes/obediencia.jpg") },
    { nombre: "Quedarse", imagen: require("./imgordenes/obediencia.jpg") },
    { nombre: "Estar", imagen: require("./imgordenes/obediencia.jpg") },
  ];

  const divertidos = [
    {
      nombre: "Dar la pata",
      imagen: require("./imgordenes/comportamiento.jpg"),
    },
    {
      nombre: "Hacer piruetas",
      imagen: require("./imgordenes/comportamiento.jpg"),
    },
    { nombre: "Buscar", imagen: require("./imgordenes/comportamiento.jpg") },
    { nombre: "Jugar", imagen: require("./imgordenes/comportamiento.jpg") },
    { nombre: "Bailar", imagen: require("./imgordenes/comportamiento.jpg") },
    { nombre: "Sonreír", imagen: require("./imgordenes/comportamiento.jpg") },
    { nombre: "Saltar", imagen: require("./imgordenes/comportamiento.jpg") },
  ];

  const renderOrdenes = () => {
    const ordenes = selectedCategory === "Basicos" ? basicos : divertidos;

    return ordenes.map((orden, index) => (
      <TouchableOpacity key={index} style={styles.ordenItem}>
        <Image source={orden.imagen} style={styles.ordenImage} />
        <Text style={styles.ordenText}>{orden.nombre}</Text>
        <View style={styles.pawIcon}>
          <FontAwesome name="paw" size={20} color="#333" />
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.navbar}>
          <TouchableOpacity
            style={[
              styles.navButton,
              selectedCategory === "Basicos" && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory("Basicos")}
          >
            <Text style={styles.navText}>Básicos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navButton,
              selectedCategory === "Divertidos" && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory("Divertidos")}
          >
            <Text style={styles.navText}>Divertidos</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.modalTitle}>Órdenes</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.ordenesContainer}>{renderOrdenes()}</View>
        </ScrollView>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 20,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  navButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  selectedCategory: {
    backgroundColor: "#3498db",
  },
  navText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  scrollView: {
    maxHeight: 450,
    marginBottom: 20,
  },
  ordenesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
    
  },
  ordenItem: {
    width: '48%',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    flexDirection: 'column',
    position: 'relative',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  ordenImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor:"#0001",
  },
  ordenText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  pawIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ModalOrdenes;
