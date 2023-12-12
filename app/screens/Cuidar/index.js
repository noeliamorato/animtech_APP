import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el icono que desees usar
//import ModalMascota from "./ModalMascota";
import ModalComidas from "./ModalComidas";
import ModalMedicamentos from "./ModalMedicamentos";
import ModalDesechos from "./ModalDesechos";
import ModalNutricion from "./ModalNutricion";
import TopContext from "../../../context/TopContext";
import { useEffect } from "react";
import ModalReportes from "./ModalReportes";

const Cuidar = () => {
  const { setTextoTop } = TopContext();

  useEffect(() => {
    setTextoTop("Cuidar");
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modalComponent) => {
    setSelectedModal(modalComponent);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedModal(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => openModal(<ModalReportes />)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          ...styles.button,
          width: 100,
        }}
      >
        <Text style={{...styles.buttonText,   fontSize: 13,}}>Reportes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openModal(<ModalComidas />)}
        style={styles.button}
      >
      <TouchableOpacity onPress={() => openModal(<ModalReportes />)} style={styles.button}>
        <Icon name="leaf" size={20} color="#900" />
        <Text style={styles.buttonText}>Reportes</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => openModal(<ModalMascota />)} style={styles.button}>
        <Icon name="paw" size={20} color="#900" />
        <Text style={styles.buttonText}>Gestión de la mascota</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => openModal(<ModalComidas />)} style={styles.button}>
        <Icon name="cutlery" size={20} color="#900" />
        <Text style={styles.buttonText}>Gestión de comidas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openModal(<ModalMedicamentos />)}
        style={styles.button}
      >
        <Icon name="medkit" size={20} color="#900" />
        <Text style={styles.buttonText}>Gestión de medicación</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openModal(<ModalDesechos />)}
        style={styles.button}
      >
        <Icon name="trash" size={20} color="#900" />
        <Text style={styles.buttonText}>Gestión de desechos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openModal(<ModalNutricion />)}
        style={styles.button}
      >
        <Icon name="leaf" size={20} color="#900" />
        <Text style={styles.buttonText}>Equilibrio nutricional</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Mostrar el componente del modal seleccionado */}
            {selectedModal}
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeModalText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 250,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  closeModalText: {
    fontSize: 18,
    color: "blue",
    marginTop: 10,
  },
});

export default Cuidar;
