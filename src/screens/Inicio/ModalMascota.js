import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import ModalGaleria from "./ModalGaleria";

const ModalMascota = ({ visible, onCancel, mascotaData }) => {
  const [galeriaVisible, setGaleriaVisible] = useState(false);

  const openModalGaleria = () => setGaleriaVisible(true);
  const closeModalGaleria = () => setGaleriaVisible(false);


  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Detalles de la Mascota</Text>

        <View style={[styles.sectionContent, styles.tareasContent]}>
          <TouchableOpacity onPress={openModalGaleria}>
            <Text style={[styles.buttonText, styles.textLight]}>
              Galeria
            </Text>
          </TouchableOpacity>
        </View>

        <ModalGaleria
          visible={galeriaVisible}
          onCancel={closeModalGaleria}
          onConfirm={closeModalGaleria}
        />
        
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
