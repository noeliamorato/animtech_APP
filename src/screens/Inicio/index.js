import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Inicio = ({ navigation }) => {
  const createPet = () => {
    navigation.navigate('CreatePet');
  };

  const petCare = () => {
    navigation.navigate('PetCare');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={createPet}>
        <Ionicons name="ios-paw-outline" size={28} color="#FF6B81" />
        <Text style={styles.buttonText}>Agregar Mascota</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={petCare}>
        <Ionicons name="ios-medkit-outline" size={28} color="#45CE30" />
        <Text style={styles.buttonText}>Cuidados de mi Mascota</Text>
      </TouchableOpacity>
      {/* Agregar más botones o elementos para otras secciones de CRUD */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF0F1',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: 280,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#333',
  },
});

export default Inicio;
