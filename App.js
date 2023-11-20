import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import MapScreen from './screens/MapScreen'; // Asegúrate de tener esta pantalla
import GenerarQR from './screens/GenerarQR';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="GenerarQR" component={GenerarQR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
