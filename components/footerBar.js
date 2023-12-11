import { View, Text, ScrollView } from "react-native";
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
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#015958",
        height: 100,
        alignItems: "center",
        elevation: 5,
        shadowColor: "#0005",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
      }}
    >
      <TouchableOpacity onPress={() => router.push("/screens/Inicio")}>
        <Text>
          <AntDesign name="home" size={28} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Mapas/MapScreen")}>
        <Text>
          <FontAwesome name="map-marker" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Cuidar")}>
        <Text>
          <Ionicons name="heart-dislike-outline" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Salud")}>
        <Text>
          <Fontisto name="doctor" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Agenda")}>
        <Text>
          <AntDesign name="book" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/MisMascotas")}>
        <Text>
          <FontAwesome5 name="dog" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Adiestramiento")}>
        <Text>
          <AntDesign name="team" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/screens/Profesionales")}>
        <Text>
          <FontAwesome name="user-md" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterBar;
