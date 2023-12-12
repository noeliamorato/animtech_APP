import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [data, setData] = useState('');
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    // Al montar el componente, intenta cargar datos almacenados
    loadData();
  }, []);

  const saveData = async () => {
    try {
      const newItem = { id: Date.now(), text: data };
      const updatedData = [...savedData, newItem];

      await AsyncStorage.setItem('miClave', JSON.stringify(updatedData));
      setSavedData(updatedData);
      setData('');

      console.log('Datos guardados correctamente');
    } catch (error) {
      console.error('Error al guardar datos:', error);
    }
  };

  const loadData = async () => {
    try {
      const savedValue = await AsyncStorage.getItem('miClave');
      if (savedValue !== null) {
        setSavedData(JSON.parse(savedValue));
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  const deleteData = async () => {
    try {
      // Aquí deberías implementar la lógica para eliminar el último elemento del array
      // y luego actualizar el estado y el almacenamiento
      const updatedData = [...savedData];
      updatedData.pop(); // Elimina el último elemento

      await AsyncStorage.setItem('miClave', JSON.stringify(updatedData));
      setSavedData(updatedData);

      console.log('Dato eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar dato:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Ingrese datos:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setData(text)}
        value={data}
      />
      <Button title="Enviar Datos" onPress={saveData} />
      <FlatList
        data={savedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Eliminar Dato" onPress={deleteData} />
    </View>
  );
};

export default App;
