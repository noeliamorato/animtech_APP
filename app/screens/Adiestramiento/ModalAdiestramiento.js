import React from "react";
import {
  View,
  Modal,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ModalAdiestramiento = ({ visible, onCancel, onConfirm }) => {
  const adiestramientos = [
    {
      title: "Adiestramiento en obediencia",
      popular: true,
      image: require("./imgadiestramiento/obediencia.jpg"),
    },
    {
      title: "Adiestramiento en agility",
      popular: false,
      image: require("./imgadiestramiento/agility.jpg"),
    },
    {
      title: "Adiestramiento para cachorros",
      popular: true,
      image: require("./imgadiestramiento/cachorros.jpg"),
    },
    {
      title: "Adiestramiento para comportamiento",
      popular: false,
      image: require("./imgadiestramiento/comportamiento.jpg"),
    },
    {
      title: "Adiestramiento en trucos",
      popular: true,
      image: require("./imgadiestramiento/trucos.jpg"),
    },

  ];

  const renderAdiestramientos = () => {
    return adiestramientos.map((adiestramiento, index) => (
      <TouchableOpacity key={index} style={styles.adiestramientoItem}>
        <Image
          source={adiestramiento.image}
          style={styles.adiestramientoImage}
        />
        <Text style={styles.adiestramientoTitle}>{adiestramiento.title}</Text>
        {adiestramiento.popular && (
          <AntDesign name="star" size={18} color="#FFD700" />
        )}
      </TouchableOpacity>
    ));
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Tipos de Adiestramiento</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.adiestramientosContainer}>
            {renderAdiestramientos()}
          </View>
        </ScrollView>
        <View style={styles.paseoSection}>
          <Text style={styles.paseoTitle}>Paseo</Text>
          <Text style={styles.paseoDescription}>
            ¡Aún no has sacado a pasear a tu mascota! ¡Salgamos y disfrutemos
            del aire fresco!
          </Text>
          <TouchableOpacity style={styles.paseoButton} onPress={onConfirm}>
            <Text style={styles.paseoButtonText}>Empezar a pasear</Text>
          </TouchableOpacity>
        </View>
        <Button title="Cancelar" onPress={onCancel} />
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
  modalTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  scrollView: {
    maxHeight: 450,
    marginBottom: 20,
  },
  adiestramientosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  adiestramientoItem: {
    width: "48%",
    marginBottom: 15,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    alignItems: "center",
    overflow: "hidden",
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  adiestramientoImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor:"#0001",
  },
  adiestramientoTitle: {
    fontSize: 14,
    padding:5,
    fontWeight: "bold",
    color: "#444",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 12,
  },
  paseoSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  paseoTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  paseoDescription: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  paseoButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  paseoButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ModalAdiestramiento;
