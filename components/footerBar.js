import { View, Text } from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { router } from "expo-router";
const FooterBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        backgroundColor: "#015958",
        height: 100,
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/screens/Inicio")}>
        <Text>
          <AntDesign name="home" size={24} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Mapas/MapScreen")}>
        <Text>
          <FontAwesome name="map-marker" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Cuidar")}>
        <Text>
          <Ionicons name="heart-dislike-outline" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Salud")}>
        <Text>
          <Fontisto name="doctor" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Agenda")}>
        <Text>
          <AntDesign name="book" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/MisMascotas")}>
        <Text>
          <FontAwesome5 name="dog" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Adiestramiento")}>
        <Text>
          <AntDesign name="team" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Profesionales")}>
        <Text>
          <FontAwesome name="user-md" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterBar;
