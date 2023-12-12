import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { peticionPost } from "../../../services/postRequest";

const ModalComidas = () => {
  const [comida, setComida] = useState({
    nombre: "",
    tipo: "",
    cantidad: "",
    calorias: "",
    proteina: "",
    grasa: "",
    carbohidratos: "",
    azucar: "",
    vitaminas: [],
  });

  const tiposDeComidas = [
    "Dieta nutricional completa",
    "Merienda",
    "Sieta terapéutica",
    "Alimentos para otros fines",
  ];
  const unidadesDeMedida = ["kg", "g", "grams", "unidades", "oz"]; // Puedes agregar más opciones según necesites

  const handleAgregarComida = async () => {

    console.log("Comida agregada:", comida);
    const res = await peticionPost("comida", comida);
    if (res) {
      alert(res.message);
      setComida({
        nombre: "",
        tipo: "",
        cantidad: "",
        calorias: "",
        proteina: "",
        grasa: "",
        carbohidratos: "",
        azucar: "",
        vitaminas: [],
      });
    }
   
  };

  const handleVitaminasSelection = (vitamina) => {
    const isSelected = comida.vitaminas.includes(vitamina);
    if (isSelected) {
      const updatedVitaminas = comida.vitaminas.filter((v) => v !== vitamina);
      setComida({ ...comida, vitaminas: updatedVitaminas });
    } else {
      setComida({ ...comida, vitaminas: [...comida.vitaminas, vitamina] });
    }
  };

  const vitaminasList = [
    "Sodio",
    "Potasio",
    "Calcio",
    "Magnesio",
    "Hierro",
    "Zinc",
    "Vitamina A",
    "Vitamina C",
    "Vitamina D",
    "Vitamina E",
    "Vitamina K",
    "Vitamina B1",
    "Vitamina B2",
    "Vitamina B3",
    "Vitamina B5",
    "Vitamina B6",
    "Vitamina B7",
    "Vitamina B9",
    "Vitamina B12",
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Agregar comida</Text>
        <View style={styles.iconInput}>
          <Icon name="restaurant" size={20} color="#900" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Nombre de la comida"
            value={comida.nombre}
            onChangeText={(text) => setComida({ ...comida, nombre: text })}
          />
        </View>
        <View style={styles.iconInput}>
          <Icon name="fastfood" size={20} color="#900" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Tipo de comida"
            value={comida.tipo}
            onChangeText={(text) => setComida({ ...comida, tipo: text })}
          />
        </View>
        <View style={styles.iconInput}>
          <Icon name="kitchen" size={20} color="#900" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Cantidad (kg, g, ...)"
            value={comida.cantidad}
            onChangeText={(text) => setComida({ ...comida, cantidad: text })}
          />
        </View>
        <View style={styles.iconInput}>
          <Icon name="whatshot" size={20} color="#900" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Calorías (kcal)"
            value={comida.calorias}
            onChangeText={(text) => setComida({ ...comida, calorias: text })}
          />
        </View>
        <View style={styles.iconInput}>
          <Icon
            name="restaurant-menu"
            size={20}
            color="#900"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Proteína (g)"
            value={comida.proteina}
            onChangeText={(text) => setComida({ ...comida, proteina: text })}
          />
        </View>
        <View style={styles.iconInput}>
          <Icon name="fastfood" size={20} color="#900" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Grasa (g)"
            value={comida.grasa}
            onChangeText={(text) => setComida({ ...comida, grasa: text })}
          />
        </View>
        <View style={styles.iconInput}>
          <Icon
            name="emoji-food-beverage"
            size={20}
            color="#900"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Carbohidratos (g)"
            value={comida.carbohidratos}
            onChangeText={(text) =>
              setComida({ ...comida, carbohidratos: text })
            }
          />
        </View>
        <View style={styles.iconInput}>
          <Icon name="local-cafe" size={20} color="#900" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Azúcar (g)"
            value={comida.azucar}
            onChangeText={(text) => setComida({ ...comida, azucar: text })}
          />
        </View>

        <Text style={styles.sectionTitle}>Vitaminas</Text>
        <View style={styles.vitaminasContainer}>
          {vitaminasList.map((vitamina, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.vitaminaButton,
                comida.vitaminas.includes(vitamina) && styles.vitaminaSelected,
              ]}
              onPress={() => handleVitaminasSelection(vitamina)}
            >
              <Text style={styles.vitaminaText}>{vitamina}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAgregarComida}
        >
          <Text style={styles.addButtonText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  iconInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  vitaminasContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  vitaminaButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 5,
  },
  vitaminaSelected: {
    backgroundColor: "#900",
  },
  vitaminaText: {
    color: "#000",
  },
  addButton: {
    backgroundColor: "#900",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ModalComidas;
