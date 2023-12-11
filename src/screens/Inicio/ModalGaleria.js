import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ModalGaleria = ({ visible, onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Se requieren permisos para acceder a la galería de imágenes.');
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        multiple: true, // Habilitar la selección múltiple
      });

      if (!result.cancelled) {
        setSelectedImages([...selectedImages, result.uri]);
      }
    } catch (error) {
      console.error('Error al seleccionar la imagen:', error);
    }
  };

  const renderItem = ({ item }) => {
    return <Image source={{ uri: item }} style={styles.imageBox} />;
  };

  return (
    <View style={styles.container}>
      <Button title="Seleccionar imagen" onPress={pickImage} />
      <FlatList
        data={selectedImages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} // Mostrar en 3 columnas
      />
      <Button title="Cerrar" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F3F7F9',
  },
  imageBox: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default ModalGaleria;
