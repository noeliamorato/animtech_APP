import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import TopContext from "../../../context/TopContext";
import { peticionGet } from "../../../services/getRequest";

const MisMascotas = () => {
  const { setTextoTop } = TopContext();

  const [getver, setGetver] = useState([]);

  useEffect(() => {
    async function fetchMascotas() {
      const mascotaData = await peticionGet("mascotas");
      setGetver(mascotaData);
    }
    fetchMascotas();
  }, []);

  console.log(getver);
  useEffect(() => {
    setTextoTop("Mis mascotas");
  }, []);

  const [searchText, setSearchText] = useState("");
  const filtrarMascotas = (text) => {
    setSearchText(text); 
    const filtradas = mascotasOriginales.filter((mascota) =>
      mascota.nombre.toLowerCase().includes(text.toLowerCase())
    );
    setGetver(filtradas);
  };

  const getIcono = (tipo) => {
    let icono = "md-paw";
    if (tipo.toLowerCase() === "perro") {
      icono = "md-paw";
    } else if (tipo.toLowerCase() === "gato") {
      icono = "md-paw-outline";
    }
    return icono;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar mascota"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <Text style={styles.registradasText}>Mascotas Registradas</Text>

      <FlatList
        data={getver}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.mascotaContainer}>
            <View style={styles.iconoContainer}>
              <Ionicons name={getIcono(item.tipo)} size={40} color="#446677" />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.otraInfo}>Tipo: {item.tipo}</Text>
              <Text style={styles.otraInfo}>Raza: {item.raza}</Text>
              <Text style={styles.otraInfo}>Peso: {item.peso}</Text>
              <Text style={styles.otraInfo}>Color: {item.color}</Text>
              <Text style={styles.otraInfo}>
                Fecha de nacimiento: {item.fechaNac}
              </Text>
              <Text style={styles.otraInfo}>Sexo: {item.sexo}</Text>
            </View>
          </View>
        )}
      />

<TextInput
  style={styles.searchInput}
  placeholder="Buscar mascota"
  value={searchText}
  onChangeText={(text) => filtrarMascotas(text)} 
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: "#000",
  },
  registradasText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mascotaItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  mascotaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#CED4DA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconoContainer: {
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#446677",
  },
  otraInfo: {
    fontSize: 16,
    color: "#446677",
    marginBottom: 3,
  },
});

export default MisMascotas;
