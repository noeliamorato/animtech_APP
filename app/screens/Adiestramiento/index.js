import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import ModalOrdenes from "./ModalOrdenes";
import ModalAdiestramiento from "./ModalAdiestramiento";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import TopContext from "../../../context/TopContext";
import { useEffect } from "react";
import { FlatList } from "react-native";
import { Image } from "react-native";

const Adiestramiento = () => {
  const { setTextoTop } = TopContext();

  useEffect(() => {
    setTextoTop("Adiestramiento");
  }, []);

  const [modaladiestramiento, setModaladiestramiento] = useState(false);
  const [modalordenes, setModalordenes] = useState(false);

  const openModaladiestramiento = () => setModaladiestramiento(true);
  const closeModaladiestramiento = () => setModaladiestramiento(false);

  const openModalordenes = () => setModalordenes(true);
  const closeModalordenes = () => setModalordenes(false);

  const carouselData = [
    {
      id: 1,
      color: "#FFC9C9",
      title: "Adiestramiento en obediencia",
      description:
        "Este adiestramiento se centra en enseñar comandos básicos y desarrollar obediencia en tu mascota.",
    },
    {
      id: 2,
      color: "#C9F5FF",
      title: "Adiestramiento en agility",
      description:
        "Un adiestramiento divertido que implica superar obstáculos y mejorar la agilidad de tu perro.",
    },
    {
      id: 3,
      color: "#D0F0C0",
      title: "Adiestramiento para cachorros",
      description:
        "Especialmente diseñado para cachorros, este adiestramiento se enfoca en el desarrollo temprano y la socialización.",
    },
    {
      id: 4,
      color: "#FFE4C4",
      title: "Adiestramiento para comportamiento",
      description:
        "Soluciona problemas de comportamiento y mejora la relación con tu mascota a través de este adiestramiento.",
    },
    {
      id: 5,
      color: "#D8BFD8",
      title: "Adiestramiento en trucos",
      description:
        "¡Diviértete enseñando trucos impresionantes a tu perro y fortalece vuestro vínculo!",
    },
  ];

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
  const divertidos = [
    {
      nombre: "Dar la pata",
      imagen: require("./imgordenes/patita.jpg"),
    },
    {
      nombre: "Hacer piruetas",
      imagen: require("./imgordenes/jugando.jpg"),
    },
    { nombre: "Buscar", imagen: require("./imgordenes/buscar.jpg") },
    { nombre: "Jugar", imagen: require("./imgordenes/jugando.jpg") },
    { nombre: "Bailar", imagen: require("./imgordenes/saltando.jpg") },
    { nombre: "Sonreír", imagen: require("./imgordenes/sonreir.jpg") },
    { nombre: "Saltar", imagen: require("./imgordenes/saltando.jpg") },
  ];
  const renderItem = ({ item }) => (
    <View style={[styles.carouselItem, { backgroundColor: item.color }]}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 900, paddingVertical: 10 }}>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );

  const adiestramientosFiltrados = adiestramientos.filter(
    (adiestramiento) => adiestramiento.popular
  );

  console.log(divertidos);
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
        {adiestramientosFiltrados.map((item) => (
          <View
            key={item.title}
            style={{ ...styles.box, position: "relative" }}
          >
            <AntDesign name="star" size={24} color="black" />
            <Text style={styles.boxTitle}>Populares</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  ...styles.boxContent,
                  width: 100,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  position: "absolute",
                  left: 0,
                  bottom: -40,
                }}
              >
                {item.title}
              </Text>
              <Image
                source={item.image}
                style={{
                  width: 80,
                  height: 100,
                  position: "absolute",
                  top: -55,
                  right: -10,
                }}
              />
            </View>
          </View>
        ))}
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
        {divertidos.map((item) => (
          <View
            key={item.title}
            style={{ ...styles.box, position: "relative" }}
          >
            <AntDesign name="star" size={24} color="black" />
            <Text style={styles.boxTitle}>Populares</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  ...styles.boxContent,
                  width: 100,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  position: "absolute",
                  left: 0,
                  bottom: -20,
                }}
              >
                {item.nombre}
              </Text>
              <Image
                source={item.imagen}
                style={{
                  width: 80,
                  height: 100,
                  position: "absolute",
                  top: -55,
                  right: -10,
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
