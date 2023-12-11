import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import userContext from "../context/userContext";

const TopBar = () => {
  const { setUser, user } = userContext();
  console.log(user);

  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "#23606E",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Usuario : {user.email}</Text>
      <TouchableOpacity
        onPress={() => router.replace("./Login")}
        style={{
          padding: 10,
          backgroundColor: "#fff",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
