import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import useLocationStore from '../context/LocationStore';

const MapScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  const setLocationdata = useLocationStore((state) => state.setLocation);
  const handleNavigateToQRScreen = () => {
    navigation.navigate('GenerarQR');
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permiso de ubicación no otorgado');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocationdata(location.coords);
        setLocation(location);
        console.log('Ubicación actual:', location.coords.latitude, location.coords.longitude);
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
      }
    };

    getLocation();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
            title="Mi ubicación"
            description="Aquí estoy"
          />
        </MapView>
      )}

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 999,
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          backgroundColor: 'lightblue',
        }}
        onPress={handleNavigateToQRScreen}
      >
        <Text>QR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
