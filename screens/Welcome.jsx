import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Welcome = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 16,
        },
        tabStyle: {
          width: 120, 
        },
        style: {
          alignItems: 'center', 
          justifyContent: 'center',
        },
        scrollEnabled: true, 
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            
          let iconName;

          switch (route.name) {
            case "Inicio":
              iconName = focused ? "ios-home" : "ios-home-outline";
              break;
            case "Mapas":
              iconName = focused ? "ios-map" : "ios-map-outline";
              break;
            case "Cuidar":
              iconName = focused ? "ios-heart" : "ios-heart-outline";
              break;
            case "Salud":
              iconName = focused ? "ios-medical" : "ios-medical-outline";
              break;
            case "Agenda":
              iconName = focused ? "ios-calendar" : "ios-calendar-outline";
              break;
            case "MisMascotas":
              iconName = focused ? "ios-paw" : "ios-paw-outline";
              break;
            case "Adiestramiento":
              iconName = focused ? "ios-school" : "ios-school-outline";
              break;
            case "Profesionales":
              iconName = focused ? "ios-people" : "ios-people-outline";
              break;
            default:
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="Inicio"
        component={require("../src/screens/Inicio").default}
      />
      <Tab.Screen
        name="Mapas"
        component={require("./MapScreen").default}
      />
      <Tab.Screen
        name="Cuidar"
        component={require("../src/screens/Cuidar").default}
      />
      <Tab.Screen
        name="Salud"
        component={require("../src/screens/Salud").default}
      />
      <Tab.Screen
        name="Agenda"
        component={require("../src/screens/Agenda").default}
      />
      <Tab.Screen
        name="MisMascotas"
        component={require("../src/screens/MisMascotas").default}
      />
      <Tab.Screen
        name="Adiestramiento"
        component={require("../src/screens/Adiestramiento").default}
      />
      <Tab.Screen
        name="Profesionales"
        component={require("../src/screens/Profesionales").default}
      />
    </Tab.Navigator>
  );
};

export default Welcome;
