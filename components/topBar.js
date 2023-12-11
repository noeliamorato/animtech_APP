import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import userContext from "../context/userContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const TopBar = () => {
  const { setUser, user } = userContext();

const userEmailWithoutDomain = user.email.split("@")[0];
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "#008F8C",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.replace("/Login")}>
        <Text style={{ transform: "rotate(180deg)" }}>
          <MaterialCommunityIcons name="location-exit" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#fff" }}>{userEmailWithoutDomain}</Text>
      <Text style={{ color: "#fff" }}>Animtech </Text>
    </View>
  );
};
export default TopBar;
