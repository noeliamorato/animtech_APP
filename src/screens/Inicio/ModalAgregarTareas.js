import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ModalAgregarTareas = ({ visible, onCancel, onConfirm }) => {
    const [categorias, setcategorias] = useState('');
    const [fecha, setFecha] = useState(null);
    const [hora, setHora] = useState('');
    const [vecesRepetidos, setVecesRepetidos] = useState('');
    const [todos, setTodos] = useState(''); // Opciones: 'dia', 'semana', 'mes', 'año'
    const [fechaFinal, setFechaFinal] = useState(null);
    const [notificaciones, setNotificaciones] = useState(false);
    const [añadirNota, setAñadirNota] = useState('');
  
    const opcionesTodos = ['Día', 'Semana', 'Mes', 'Año'];
  
    const renderOpcionesTodos = () => {
      return opcionesTodos.map((item, index) => (
        <Button
          key={index}
          title={item}
          onPress={() => setTodos(item.toLowerCase())}
          color={todos === item.toLowerCase() ? '#6495ED' : '#aaa'}
        />
      ));
    };
  
    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Nueva Tarea</Text>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Categorías:</Text>
            <TextInput
              style={styles.input}
              value={categorias}
              onChangeText={text => setcategorias(text)}
            />
          </View>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha:</Text>
            {/*selector de fecha */}
          </View>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Hora:</Text>
            <TextInput
              style={styles.input}
              value={hora}
              onChangeText={text => setHora(text)}
              keyboardType="numeric"
            />
          </View>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Veces Repetidos:</Text>
            <TextInput
              style={styles.input}
              value={vecesRepetidos}
              onChangeText={text => setVecesRepetidos(text)}
              keyboardType="numeric"
            />
          </View>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Todos:</Text>
            <View style={styles.botonesContainer}>{renderOpcionesTodos()}</View>
          </View>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Final:</Text>
            {/* selector de fecha */}
          </View>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Notificaciones:</Text>
            <Button
              title={notificaciones ? 'Activado' : 'Desactivado'}
              onPress={() => setNotificaciones(!notificaciones)}
              color={notificaciones ? '#6495ED' : '#aaa'}
            />
          </View>
  
          <View style={styles.campo}>
            <Text style={styles.label}>Añadir Nota:</Text>
            <TextInput
              style={styles.input}
              value={añadirNota}
              onChangeText={text => setAñadirNota(text)}
              multiline
            />
          </View>
  
          <View style={styles.botones}>
            <Button title="Cancelar" onPress={onCancel} />
            <Button title="Añadir Tarea" onPress={onConfirm} />
          </View>
        </View>
      </Modal>
    );
  };

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#F3F7F9',
        padding: 18,
        borderRadius: 10,
        shadowColor: '#888',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
    
      titulo: {
        fontSize: 24,
        fontWeight: '600',
        color: '#446677',
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
      },
    
      label: {
        fontSize: 16,
        color: '#446677',
        marginBottom: 6,
        fontWeight: '500',
      },
    
      input: {
        borderWidth: 2,
        borderColor: '#A3BFFA',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#ECF4F9',
        marginBottom: 12,
      },
    
      botones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
      boton: {
        backgroundColor: '#446677',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      botonTexto: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase',
      },
    });

export default ModalAgregarTareas;
