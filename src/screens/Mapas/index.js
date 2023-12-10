import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mapas = () => {
  const navigation = useNavigation();

  const goToMapScreen = () => {
    navigation.navigate('MapScreen');
  };

  return (
    <TouchableOpacity onPress={goToMapScreen}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>Presiona para ver el Mapa</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Mapas;
