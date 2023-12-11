import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/screens/Login";
import MapScreen from "./app/screens/Mapas/MapScreen"; // Asegúrate de tener esta pantalla
import GenerarQR from "./screens/GenerarQR";
import Welcome from "./screens/Welcome";
import Adiestramiento from "./src/screens/Adiestramiento";
import Agenda from "./src/screens/Agenda";
import Cuidar from "./src/screens/Cuidar";
import Inicio from "./src/screens/Inicio";
import Mapas from "./src/screens/Mapas";
import MisMascotas from "./src/screens/MisMascotas";
import Profesionales from "./src/screens/Profesionales";
import Salud from "./src/screens/Salud";
import ModalAgregarMascota from "./src/screens/Inicio/ModalAgregarMascota";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="GenerarQR" component={GenerarQR} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Adiestramiento" component={Adiestramiento} />
          <Stack.Screen name="Agenda" component={Agenda} />
          <Stack.Screen name="Cuidar" component={Cuidar} />
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Mapas" component={Mapas} />
          <Stack.Screen name="MisMascotas" component={MisMascotas} />
          <Stack.Screen name="Profesionales" component={Profesionales} />
          <Stack.Screen name="Salud" component={Salud} />
          <Stack.Screen
            name="ModalAgregarMascota"
            component={ModalAgregarMascota}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
