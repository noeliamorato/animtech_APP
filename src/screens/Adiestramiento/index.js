import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import ModalOrdenes from "./ModalOrdenes";
import ModalAdiestramiento from "./ModalAdiestramiento";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Adiestramiento = () => {
  const [modaladiestramiento, setModaladiestramiento] = useState(false);
  const [modalordenes, setModalordenes] = useState(false);

  const openModaladiestramiento = () => setModaladiestramiento(true);
  const closeModaladiestramiento = () => setModaladiestramiento(false);

  const openModalordenes = () => setModalordenes(true);
  const closeModalordenes = () => setModalordenes(false);

  const carouselData = [
    { id: 1, color: "#FFC9C9" },
    { id: 2, color: "#C9F5FF" },
    { id: 3, color: "#D0F0C0" },
    { id: 4, color: "#FFE4C4" },
    { id: 5, color: "#D8BFD8" },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.carouselItem, { backgroundColor: item.color }]} />
  );

  return (
    <ScrollView style={styles.container}>
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={200}
        layout="default"
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
        inactiveSlideOpacity={0.7}
      />

      <TouchableOpacity onPress={openModaladiestramiento}>
        <Text style={styles.sectionTitle}>Explorar Adiestramiento</Text>
      </TouchableOpacity>
      <ModalAdiestramiento
        visible={modaladiestramiento}
        onCancel={closeModaladiestramiento}
        onConfirm={closeModaladiestramiento}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.boxTitle}>Populares</Text>
          <Text style={styles.boxContent}>Contenido de la caja 1</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.boxTitle}>Populares</Text>
          <Text style={styles.boxContent}>Contenido de la caja 2</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.boxTitle}>Populares</Text>
          <Text style={styles.boxContent}>Contenido de la caja 3</Text>
        </View>
        {/* Repite estos bloques de View según sea necesario */}
      </ScrollView>

      <TouchableOpacity onPress={openModalordenes}>
        <Text style={styles.sectionTitle}>Ordenes</Text>
      </TouchableOpacity>
      <ModalOrdenes
        visible={modalordenes}
        onCancel={closeModalordenes}
        onConfirm={closeModalordenes}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.boxTitle}>Populares</Text>
          <Text style={styles.boxContent}>Contenido de la caja 1</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.boxTitle}>Populares</Text>
          <Text style={styles.boxContent}>Contenido de la caja 2</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.boxTitle}>Populares</Text>
          <Text style={styles.boxContent}>Contenido de la caja 3</Text>
        </View>
        {/* Repite estos bloques de View según sea necesario */}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: "#0009",
  },
  carouselItem: {
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  box: {
    width: 200,
    height: 110,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#F0F0F0",
    marginRight: 20,
  },
  boxTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555555",
  },
  boxContent: {
    color: "#777777",
  },
});

export default Adiestramiento;
