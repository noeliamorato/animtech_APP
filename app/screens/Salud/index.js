import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Grificobarras from "../../../components/grificobarras";
import GraficoTablas from "../../../components/graficoTablas";
import GraficoLineas from "../../../components/graficoLineas";

const Salud = () => {
  const [verestado, setVerestado] = useState("");
  return (
    <ScrollView style={{width:"100%"}}>
      <View style={{width:"100%",flexDirection:"column",alignItems:"center" , paddingTop:20 }}>
      <Text style={styles.title}>Signos Vitales en Tiempo Real</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVerestado("Barras")}
      >
        <Ionicons name="bar-chart-outline" size={28} color="#3498DB" />
        <Text style={styles.buttonText}>Gráfico de Barras</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVerestado("Tablas")}
      >
        <Ionicons name="grid-outline" size={28} color="#E67E22" />
        <Text style={styles.buttonText}>Gráfico de Tablas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVerestado("Líneas")}
      >
        <Ionicons name="pulse-outline" size={28} color="#27AE60" />
        <Text style={styles.buttonText}>Gráfico de Líneas</Text>
      </TouchableOpacity>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Espacio para descripción u otros detalles sobre los gráficos
          seleccionados.
        </Text>
      </View>
        </View>
      <View style={{ height: "auto" ,marginVertical:20}}>
        {verestado === "Barras" ? <Grificobarras  /> : ""}
        {verestado === "Tablas" ? <GraficoTablas /> : ""}
        {verestado === "Líneas" ? <GraficoLineas  /> : ""}
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#F4F6F7",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2C3E50",
    textShadowColor: "#ddd",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 15,
    color: "#333",
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  descriptionText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Salud;
