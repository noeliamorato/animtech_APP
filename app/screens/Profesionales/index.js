import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de tener instalado el paquete de iconos
import { useEffect } from 'react';
import TopContext from '../../../context/TopContext';

const Profesionales = () => {
  const{setTextoTop}= TopContext();

  useEffect(()=>{
    setTextoTop("Profesionales");
  },[])
  const [seccionActual, setSeccionActual] = useState('Guardados');
  const [tipo, setTipo] = useState('');
  const [localizacion, setLocalizacion] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const renderContenido = () => {
    if (seccionActual === 'Guardados') {
      return (
        <View style={styles.contenido}>
          <Text>Profesionales Guardados</Text>
          {/* Aquí mostrarías la lista de profesionales guardados */}
        </View>
      );
    } else {
      return (
        <View style={styles.contenido}>
          <View style={styles.localizacionContainer}>
            <Text>Tipo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese la profesión"
              value={tipo}
              onChangeText={(text) => setTipo(text)}
            />
          </View>
          <View style={styles.localizacionContainer}>
            <Text>Localización:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese la localización"
              value={localizacion}
              onChangeText={(text) => setLocalizacion(text)}
            />
          </View>
          <View style={styles.buscadorContainer}>
            <FontAwesome name="search" size={20} color="#333" style={styles.iconoLupa} />
            <TextInput
              style={[styles.input, styles.inputBusqueda]}
              placeholder="Buscar"
              value={busqueda}
              onChangeText={(text) => setBusqueda(text)}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setSeccionActual('Guardados')} style={styles.navButton}>
          <Text style={[styles.navText, seccionActual === 'Guardados' && styles.navTextSelected]}>Guardados</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSeccionActual('Buscar')} style={styles.navButton}>
          <Text style={[styles.navText, seccionActual === 'Buscar' && styles.navTextSelected]}>Buscar</Text>
        </TouchableOpacity>
      </View>
      {renderContenido()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  navTextSelected: {
    color: 'blue',
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  opcionesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  
  localizacionContainer: {
    marginBottom: 10,
  },
  buscadorContainer: {
    width:300,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconoLupa: {
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputBusqueda: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default Profesionales;
