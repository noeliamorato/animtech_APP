import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Cuidar = () => {
  const navigation = useNavigation();

  const goToGraph = (graphType) => {
    // Lógica para navegar a una pantalla de gráfico según el tipo seleccionado
    // navigation.navigate('Graph', { graphType }); // Por ejemplo, 'Graph' podría ser la pantalla de gráfico
    console.log(`Mostrar gráfico de ${graphType}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signos Vitales en Tiempo Real</Text>
      <TouchableOpacity style={styles.button} onPress={() => goToGraph('Barras')}>
        <Ionicons name="bar-chart-outline" size={28} color="#3498DB" />
        <Text style={styles.buttonText}>Gráfico de Barras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToGraph('Tablas')}>
        <Ionicons name="grid-outline" size={28} color="#E67E22" />
        <Text style={styles.buttonText}>Gráfico de Tablas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => goToGraph('Líneas')}>
        <Ionicons name="pulse-outline" size={28} color="#27AE60" />
        <Text style={styles.buttonText}>Gráfico de Líneas</Text>
      </TouchableOpacity>
      {/* Agregar más botones o elementos para otros tipos de gráficos */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Espacio para descripción u otros detalles sobre los gráficos seleccionados.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#F4F6F7',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2C3E50',
    textShadowColor: '#ddd',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
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
  descriptionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Cuidar;
