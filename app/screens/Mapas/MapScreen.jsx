import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import useLocationStore from "../../../context/LocationStore";
import { ScrollView } from "react-native";

const MapScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  const setLocationdata = useLocationStore((state) => state.setLocation);

  const handleNavigateToQRScreen = () => {
    navigation.navigate("GenerarQR");
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Permiso de ubicación no otorgado");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocationdata(location.coords);
        setLocation(location);
        console.log(
          "Ubicación actual:",
          location.coords.latitude,
          location.coords.longitude
        );
      } catch (error) {
        console.error("Error al obtener la ubicación:", error);
      }
    };

    getLocation();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {location && (
          <View
            style={{
              position: "relative",
              width: "100%",
              height: 500,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <MapView
              style={{ width: "100%", height: "100%" }}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="Mi ubicación"
                description="Aquí estoy"
              />
            </MapView>
          </View>
        )}

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: "lightblue",
              margin: 10,
            }}
            onPress={handleNavigateToQRScreen}
          >
            <Text>Generar QR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: "lightgrey",
              margin: 10,
            }}
          />
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: "lightgrey",
              margin: 10,
            }}
          />
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: "lightgrey",
              margin: 10,
            }}
          />
        </View>

        {location && (
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <Text style={{ marginRight: 10 }}>Aquí estoy</Text>
            <Ionicons name="md-paw" size={32} color="black" />
          </View>
        )}

        {location && (
          <View
            style={{
              width: "80%",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              backgroundColor: "lightgrey",
              alignItems: "center",
            }}
          >
            <TextInput placeholder="Espere a que alguien escanee a tu mascota" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MapScreen;
