import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { peticionGet } from "../../../services/getRequest";

const ModalReportes = () => {
  const [data, setData] = useState("");
  const [desechosData, setDesechosData] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [nutricionData, setNutricionData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await peticionGet("comida");
        setData(result);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    const fetchDataDesechos = async () => {
      try {
        const result = await peticionGet("desechos");
        setDesechosData(result);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    const fetchDataMedicamentos = async () => {
      try {
        const result = await peticionGet("medicamentos");
        setMedicamentos(result);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    const fetchDataNutricion = async () => {
      try {
        const result = await peticionGet("nutricionmascota");
        setNutricionData(result);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchDataNutricion();
    fetchDataMedicamentos();
    fetchDataDesechos();
    fetchData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ padding: 10 }}>Comidas</Text>

      <ScrollView style={{ height: 200 }}>
        <FlatList
          style={{
            flexDirection: "row",
            gap: 5,
            width: "96%",
            flexWrap: "wrap",
          }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#fff",
                marginVertical: 10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <View
                style={{ backgroundColor: "#015958", padding: 10, width: 350 }}
              >
                <Text style={{ color: "#fff" }}>
                  Nombre: {item.nombre} {item.apellido}
                </Text>
                <Text style={{ color: "#fff" }}>
                  tipoAlimento: {item.tipoAlimento}
                </Text>
                <Text style={{ color: "#fff" }}>Cantidad: {item.cantidad}</Text>
                <Text style={{ color: "#fff" }}>Horarios: {item.horarios}</Text>
                <Text style={{ color: "#fff" }}>
                  Observaciones: {item.observaciones}
                </Text>
                <Text style={{ color: "red" }}>
                  Fecha: {new Date().toLocaleDateString()}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
      <ScrollView style={{ height: 200 }}>
        <Text>Medicacion</Text>
        <FlatList
          style={{
            flexDirection: "row",
            gap: 5,
            width: "96%",
            flexWrap: "wrap",
          }}
          data={medicamentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#fff",
                marginVertical: 10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <View
                style={{ backgroundColor: "#015958", padding: 10, width: 350 }}
              >
                <Text style={{ color: "#fff" }}>
                  Nombre: {item.nombre} {item.apellido}
                </Text>
                <Text style={{ color: "#fff" }}>Nombre: {item.nombre}</Text>
                <Text style={{ color: "#fff" }}>notas: {item.notas}</Text>
                <Text style={{ color: "red" }}>
                  Fecha: {new Date().toLocaleDateString()}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
      <ScrollView style={{ height: 200 }}>
        <Text>Desechos</Text>
        <FlatList
          style={{
            flexDirection: "row",
            gap: 5,
            width: "96%",
            flexWrap: "wrap",
          }}
          data={desechosData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#fff",
                marginVertical: 10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <View
                style={{ backgroundColor: "#015958", padding: 10, width: 350 }}
              >
                <Text style={{ color: "#fff" }}>
                  Nombre: {item.nombre} {item.apellido}
                </Text>
                <Text style={{ color: "#fff" }}>Tipo: {item.tipo}</Text>
                <Text style={{ color: "#fff" }}>Textura: {item.textura}</Text>
                <Text style={{ color: "#fff" }}>Color: {item.color}</Text>
                <Text style={{ color: "#fff" }}>Olor: {item.olor}</Text>

                <Text style={{ color: "red" }}>
                  Fecha: {new Date().toLocaleDateString()}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
      <ScrollView style={{ height: 200 }}>
        <Text>Equilibrio nutricional</Text>
        <FlatList
          style={{
            flexDirection: "row",
            gap: 5,
            width: "96%",
            flexWrap: "wrap",
          }}
          data={nutricionData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#fff",
                marginVertical: 10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10,
                borderRadius: 7,
              }}
            >
              <View
                style={{ backgroundColor: "#015958", padding: 10, width: 350 }}
              >
                <Text style={{ color: "#fff" }}>
                  Nombre: {item.nombre} {item.apellido}
                </Text>
                <Text style={{ color: "#fff" }}>Tipo: {item.edad}</Text>
                <Text style={{ color: "#fff" }}>Cantidad: {item.cantidad}</Text>
                <Text style={{ color: "#fff" }}>Calorias: {item.calorias}</Text>
                <Text style={{ color: "#fff" }}>Azucar: {item.azucar}</Text>
                <Text style={{ color: "#fff" }}>
                  vitaminas: {item.vitaminas}
                </Text>
                <Text style={{ color: "red" }}>
                  Fecha: {new Date().toLocaleDateString()}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default ModalReportes;
