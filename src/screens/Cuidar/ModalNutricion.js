import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalNutricion = () => {
  const [alimento, setAlimento] = useState({
    nombre: '',
    tipo: '',
    cantidadDiaria: '',
    horarios: '',
    observaciones: '',
  });

  const handleGuardarAlimento = () => {
    // Lógica para guardar la información del alimento
    console.log('Alimento guardado:', alimento);
    // Aquí puedes agregar la lógica para guardar la información en tu base de datos o realizar cualquier otra acción necesaria
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Agregar información de alimento</Text>
      <View style={styles.inputContainer}>
        <Icon name="fastfood" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Nombre del alimento"
          value={alimento.nombre}
          onChangeText={(text) => setAlimento({ ...alimento, nombre: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="category" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Tipo de alimento"
          value={alimento.tipo}
          onChangeText={(text) => setAlimento({ ...alimento, tipo: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="add-circle-outline" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Cantidad diaria (porción)"
          value={alimento.cantidadDiaria}
          onChangeText={(text) => setAlimento({ ...alimento, cantidadDiaria: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="schedule" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Horarios de alimentación"
          value={alimento.horarios}
          onChangeText={(text) => setAlimento({ ...alimento, horarios: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="notes" size={20} color="#900" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Observaciones"
          value={alimento.observaciones}
          onChangeText={(text) => setAlimento({ ...alimento, observaciones: text })}
          multiline
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGuardarAlimento}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width:'85%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 60,
        
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,


      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
      },
      icon: {
        marginRight: 10,
      },
      textInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
      },
      button: {
        backgroundColor: '#900',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginTop: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });

export default ModalNutricion;
