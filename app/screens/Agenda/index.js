import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TopContext from '../../../context/TopContext';
import { useEffect } from 'react';
//import { Calendar } from 'react-native-calendars';


const Agenda = () => {
  const{setTextoTop}= TopContext();

  useEffect(()=>{
    setTextoTop("Agenda");
  },[])
  const [currentSection, setCurrentSection] = useState('Calendario');

  const handleNavigation = (section) => {
    setCurrentSection(section);
    console.log(`Navegar a la sección: ${section}`);
  };

  const renderSectionContent = () => {
    switch (currentSection) {
      // case 'Calendario':
      //   return (
      //     <View style={styles.calendarContainer}>
      //       <Calendar
      //         // Configuración del calendario
      //         // Por ejemplo: markedDates, onDayPress, etc.
      //         // Consulta la documentación de react-native-calendars para más detalles
      //       />
      //     </View>
      //   );
      case 'Atrasado':
        return (
          <View style={styles.agendaContainer}>
            <Text>Contenido de la agenda para Atrasado</Text>
            {/* ... Contenido específico para Atrasado ... */}
          </View>
        );
      case 'Proximo':
        return (
          <View style={styles.agendaContainer}>
            <Text>Contenido de la agenda para Proximo</Text>
            {/* ... Contenido específico para Proximo ... */}
          </View>
        );
      case 'Eventos':
        return (
          <View style={styles.agendaContainer}>
            <Text>Contenido de la agenda para Eventos</Text>
            {/* ... Contenido específico para Eventos ... */}
          </View>
        );
      case 'Chequeo de Salud':
        return (
          <View style={styles.agendaContainer}>
            <Text>Contenido de la agenda para Chequeo de Salud</Text>
            {/* ... Contenido específico para Chequeo de Salud ... */}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Encabezado con las opciones de navegación */}
      <View style={styles.header}>
      {/* <TouchableOpacity onPress={() => handleNavigation('Calendario')}>
          <Text>Calendario</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => handleNavigation('Atrasado')}>
          <Text>Atrasado</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Proximo')}>
          <Text>Proximo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Eventos')}>
          <Text>Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Chequeo de Salud')}>
          <Text>Chequeo de Salud</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido de la sección seleccionada */}
      {renderSectionContent()}
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  calendarContainer: {
    flex: 1,
    backgroundColor: 'white', // Cambia el color de fondo según tus necesidades
    padding: 10,
  },
  agendaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Agenda;
