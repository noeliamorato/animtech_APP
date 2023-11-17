// MapScreen.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToQRScreen = () => {
    navigation.navigate('GenerarQR');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Botón para navegar a la pantalla QR */}
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          backgroundColor: 'lightblue', // Estilo opcional
        }}
        onPress={handleNavigateToQRScreen}
      >
        <Text>QR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
