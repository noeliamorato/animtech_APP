import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Welcome = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        style: {
          alignItems: "center",
          justifyContent: "center",
        },
        showLabel: false,
        tabBarStyle: {
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={require("../src/screens/Inicio").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapas"
        component={require("./MapScreen").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cuidar"
        component={require("../src/screens/Cuidar").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Salud"
        component={require("../src/screens/Salud").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-medical" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={require("../src/screens/Agenda").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MisMascotas"
        component={require("../src/screens/MisMascotas").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-paw" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Adiestramiento"
        component={require("../src/screens/Adiestramiento").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-school" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profesionales"
        component={require("../src/screens/Profesionales").default}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-people" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Welcome;
