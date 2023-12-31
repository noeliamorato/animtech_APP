import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import ModalAgregarMascota from "./ModalAgregarMascota";
import ModalAgregarTareas from "./ModalAgregarTareas";
import ModalMascota from "./ModalMascota";
import Ionicons from "react-native-vector-icons/Ionicons";
import TopContext from "../../../context/TopContext";
import { useEffect } from "react";

const Inicio = () => {
  const { setTextoTop } = TopContext();

  useEffect(() => {
    setTextoTop("Inicio");
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTareasVisible, setModalTareasVisible] = useState(false);
  const [modalMascotaVisible, setModalMascotaVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const openModalTareas = () => setModalTareasVisible(true);
  const closeModalTareas = () => setModalTareasVisible(false);

  const openModalMascota = () => setModalMascotaVisible(true);
  const closeModalMascota = () => setModalMascotaVisible(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Sección Mis Mascotas */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={[styles.sectionTitle, { color: "#456" }]}>
            Mis Mascotas
          </Text>
          <TouchableOpacity onPress={openModal}>
            <Text>Añadir Mascota</Text>
          </TouchableOpacity>
        </View>

        <ModalAgregarMascota
          visible={modalVisible}
          onCancel={closeModal}
          onConfirm={closeModal}
        />

        <TouchableOpacity
          onPress={openModalMascota}
          style={{
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: 10,
            overflow: "hidden",
            height: 150,
          }}
        >
          <Image
            source={{
              uri: "https://hospitalveterinariodonostia.com/wp-content/uploads/2022/02/Personalidad-gatos.png",
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            onError={(error) => console.error("Error loading image:", error)}
          />

          <View style={{ ...styles.circle, backgroundColor: "#fff7" }}>
            <Text></Text>
          </View>
        </TouchableOpacity>

        <ModalMascota
          visible={modalMascotaVisible}
          onCancel={closeModalMascota}
          onConfirm={closeModalMascota}
        />
      </View>

      {/* Sección Tareas */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={[styles.sectionTitle, { color: "#678" }]}>Tareas</Text>
        </View>

        <View style={[styles.sectionContent, styles.tareasContent]}>
          <TouchableOpacity onPress={openModalTareas}>
            <Text style={[styles.buttonText, styles.textLight]}>
              AÑADIR TAREAS
            </Text>
          </TouchableOpacity>
        </View>

        <ModalAgregarTareas
          visible={modalTareasVisible}
          onCancel={closeModalTareas}
          onConfirm={closeModalTareas}
        />
      </View>

      {/* Sección Acciones Rápidas */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={[styles.sectionTitle, { color: "#789" }]}>
            Acciones Rápidas
          </Text>
        </View>

        <View style={[styles.sectionContent, styles.accionesContent]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.accionItem, { borderColor: "skyblue" }]}>
              <Ionicons name="calendar" size={24} color="skyblue" />
              <Text style={{ color: "skyblue" }}>Registrar Actividad</Text>
            </View>

            <View style={[styles.accionItem, { borderColor: "orange" }]}>
              <Ionicons name="list" size={24} color="orange" />
              <Text style={{ color: "orange" }}>Mis Listas</Text>
            </View>

            <View style={[styles.accionItem, { borderColor: "#0009" }]}>
              <Ionicons name="paw" size={24} color="#0009" />
              <Text style={{ color: "#0009" }}>Agendar Veterinario</Text>
            </View>

            <View style={[styles.accionItem, { borderColor: "#f419" }]}>
              <Ionicons name="fitness" size={24} color="#f419" />
              <Text style={{ color: "#f419" }}>Actividades Físicas</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  sectionContainer: {
    marginBottom: 15,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  sectionContent: {
    width: 360,
    height: 120,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0003",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#0009",
    marginLeft: 5,
  },
  tareasContent: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0008",
  },
  accionesContent: {
    backgroundColor: "#F0F4F8",
  },
  accionItem: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 15,
    marginRight: 10,
  },
});

export default Inicio;
