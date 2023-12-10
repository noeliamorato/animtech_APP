import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ModalAgregarMascota from "./ModalAgregarMascota";
import ModalAgregarTareas from "./ModalAgregarTareas";
import ModalMascota from "./ModalMascota";
import Ionicons from "react-native-vector-icons/Ionicons";

const Inicio = () => {
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

        <TouchableOpacity onPress={openModalMascota}>
          <View style={[styles.sectionContent, { backgroundColor: "#DEF" }]}>
            <Text>foto de mascota</Text>
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
            <View style={[styles.accionItem, { borderColor: "#81D8FA" }]}>
              <Ionicons name="calendar" size={24} color="#81D8FA" />
              <Text style={{ color: "#81D8FA" }}>Registrar Actividad</Text>
            </View>

            <View style={[styles.accionItem, { borderColor: "#B7BCF8" }]}>
              <Ionicons name="list" size={24} color="#B7BCF8" />
              <Text style={{ color: "#B7BCF8" }}>Mis Listas</Text>
            </View>

            <View style={[styles.accionItem, { borderColor: "#0005" }]}>
              <Ionicons name="paw" size={24} color="#0005" />
              <Text style={{ color: "#0005" }}>Agendar Veterinario</Text>
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
    backgroundColor: "#F0F4F8",
    padding: 20,
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
    color: "#6495ED",
  },
  sectionContent: {
    width: 360,
    height: 80,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#6495ED",
    marginLeft: 5,
  },
  tareasContent: {
    backgroundColor: "#E6F9FF",
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
