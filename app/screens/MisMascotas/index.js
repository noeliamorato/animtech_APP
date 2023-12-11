import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MisMascotas = () => {
  const [searchText, setSearchText] = useState('');
  const [mascotas] = useState([
    { id: 1, nombre: 'Luna' },
    { id: 2, nombre: 'Max' },
    // Agrega más objetos con los datos de tus mascotas
  ]);

  // Filtrar mascotas según el texto de búsqueda
  const filteredMascotas = mascotas.filter(mascota =>
    mascota.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar mascota"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <Text style={styles.registradasText}>Mascotas Registradas</Text>
      <FlatList
        data={filteredMascotas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.mascotaItem}>
            <Text>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#000', // Cambiar color del texto si es necesario
  },
  registradasText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mascotaItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default MisMascotas;
