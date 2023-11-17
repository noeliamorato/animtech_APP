import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const GenerarQR = () => {
  const [datosMascota, setDatosMascota] = useState({
    nombre: '',
    edad: '',
    fechaNacimiento: '',
    color: '',
    tamaño: '',
    sexo: '',
  });

  const handleGenerarQR = () => {
    // Aquí implementarías la lógica para generar el código QR con los datos
    // Por ahora, simplemente imprimimos los datos en la consola
    console.log(datosMascota);
  };

  return (
    <View style={styles.container}>
      {/* Campos para ingresar datos de la mascota */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={datosMascota.nombre}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, nombre: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={datosMascota.edad}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, edad: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={datosMascota.fechaNacimiento}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, fechaNacimiento: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={datosMascota.color}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, color: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Tamaño"
        value={datosMascota.tamaño}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, tamaño: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={datosMascota.sexo}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, sexo: text })}
      />

      {/* Botón para generar el código QR */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleGenerarQR}
      >
        <Text style={styles.buttonText}>Generar QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default GenerarQR;