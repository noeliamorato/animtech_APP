import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalReportes = () => {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const savedValue = await AsyncStorage.getItem("medicamento");
      if (savedValue !== null) {
        setSavedData(JSON.parse(savedValue));
      }
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  };

  console.log(savedData);

  return (
    <View style={{ paddingVertical: 20 }}>
      <ScrollView style={{ height: 200 }}>
        <Text>Comidas</Text>
        <Text> Azucar : {savedData.azucar}</Text>
        <Text> Calorias : {savedData.calorias}</Text>
        <Text>Cantidad : {savedData.cantidad}</Text>
        <Text>Carbohidratos : {savedData.carbohidratos}</Text>
        <Text>Nombre : {savedData.nombre}</Text>
        <Text>Grasa : {savedData.grasa}</Text>
        <Text>Proteina : {savedData.proteina}</Text>
        <Text>Tipo : {savedData.tipo}</Text>
        <Text>
          Vitaminas: {savedData.vitaminas && savedData.vitaminas.join(", ")}
        </Text>
      </ScrollView>
      <ScrollView style={{ height: 200 }}>
        <Text>Medicacion</Text>
        {savedData.map((item, index) => (
          <View key={index} style={{width:"100"}}>
            <Text>Nombre : {item.text.nombre}</Text>
            <Text>Grasa : {item.text.nota}</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView style={{ height: 200 }}>
        <Text>Desechos</Text>
      </ScrollView>
      <ScrollView style={{ height: 200 }}>
        <Text>Equilibrio nutricional</Text>
      </ScrollView>
    </View>
  );
};

export default ModalReportes;
