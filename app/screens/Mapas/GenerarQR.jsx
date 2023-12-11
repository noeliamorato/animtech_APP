import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  Button,
  Platform,
  Animated,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import QRCode from 'react-native-qrcode-svg';
import useLocationStore from '../../../context/LocationStore';

const GenerarQR = () => {
  const [datosMascota, setDatosMascota] = useState({
    nombre: '',
    edad: '',
    fechaNacimiento: '',
    color: '',
    tamaño: '',
    sexo: '',
    //falta raza
  });
  const [errorNombre, setErrorNombre] = useState('');
  const [errorEdad, setErrorEdad] = useState('');
  const [errorFecha, setErrorFecha] = useState('');
  const [errorColor, setErrorColor] = useState('');
  const [errorTamaño, setErrorTamaño] = useState('');
  const [errorSexo, setErrorSexo] = useState('');

  const [imageLoaded, setImageLoaded] = useState(false);
  const [image, setImage] = useState(null);

  const location = useLocationStore((state) => state.location);

  const [qrContent, setQrContent] = useState({ location: location });
  const [modalVisible, setModalVisible] = useState(false);

  const fadeAnim = useState(new Animated.Value(0))[0];
  console.log(qrContent);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Lo siento, se necesita permiso para acceder a la galería.');
        }
      }
    })();
  }, []);

  const validateFields = () => {
    let isValid = true;

    if (!datosMascota.nombre.trim()) {
      setErrorNombre('Requerido');
      isValid = false;
    } else {
      setErrorNombre('');
    }

    if (!datosMascota.edad) {
      setErrorEdad('Requerido');
      isValid = false;
    } else {
      setErrorEdad('');
    }

    if (!datosMascota.fechaNacimiento) {
      setErrorFecha('Requerido');
      isValid = false;
    } else {
      setErrorFecha('');
    }

    if (!datosMascota.color) {
      setErrorColor('Requerido');
      isValid = false;
    } else {
      setErrorColor('');
    }

    if (!datosMascota.tamaño) {
      setErrorTamaño('Requerido');
      isValid = false;
    } else {
      setErrorTamaño('');
    }

    if (!datosMascota.sexo) {
      setErrorSexo('Requerido');
      isValid = false;
    } else {
      setErrorSexo('');
    }
    return isValid;
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleGenerarQR = () => {
    if (!validateFields()) {
      return;
    }

    setModalVisible(true);
    fadeIn();

    const content = {
      datosMascota,
      location: location ? { latitude: location.latitude, longitude: location.longitude } : null,
    };
    setQrContent(JSON.stringify(content));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos de tu mascota</Text>

      <TextInput
        style={[styles.input, errorNombre && styles.error]}
        placeholder="Nombre"
        value={datosMascota.nombre}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, nombre: text })}
        onBlur={() => setErrorNombre('')}
      />
      {errorNombre && <Text style={styles.errorText}>{errorNombre}</Text>}

      <TextInput
        style={[styles.input, errorEdad && styles.error]}
        placeholder="Edad"
        value={datosMascota.edad}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, edad: text })}
        onBlur={() => setErrorEdad('')}
        keyboardType="numeric"
      />
      {errorEdad && <Text style={styles.errorText}>{errorEdad}</Text>}

      <TextInput
        style={[styles.input, errorFecha && styles.error]}
        placeholder="Fecha de Nacimiento"
        value={datosMascota.fechaNacimiento}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, fechaNacimiento: text })}
        onBlur={() => setErrorFecha('')}
      />
      {errorFecha && <Text style={styles.errorText}>{errorFecha}</Text>}

      <TextInput
        style={[styles.input, errorColor && styles.error]}
        placeholder="Color"
        value={datosMascota.color}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, color: text })}
        onBlur={() => setErrorColor('')}
      />
      {errorColor && <Text style={styles.errorText}>{errorColor}</Text>}

      <TextInput
        style={[styles.input, errorTamaño && styles.error]}
        placeholder="Tamaño"
        value={datosMascota.tamaño}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, tamaño: text })}
        onBlur={() => setErrorTamaño('')}
      />
      {errorTamaño && <Text style={styles.errorText}>{errorTamaño}</Text>}

      <TextInput
        style={[styles.input, errorSexo && styles.error]}
        placeholder="Sexo"
        value={datosMascota.sexo}
        onChangeText={(text) => setDatosMascota({ ...datosMascota, sexo: text })}
        onBlur={() => setErrorSexo('')}
      />
      {errorSexo && <Text style={styles.errorText}>{errorSexo}</Text>}

      {image && imageLoaded && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} resizeMode="contain" width={200} height={200} />
        </View>
      )}
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>Foto de tu mascota</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <TouchableOpacity style={styles.button} onPress={handleGenerarQR}>
        <Text style={styles.buttonText}>Generar QR</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
            {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
            {qrContent !== '' && (
              <View style={styles.qrContainer}>
                <QRCode value={qrContent} size={200} />
              </View>
            )}
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  imageButton: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    marginTop: 20,
    width: '100%',
  },
  imageButtonText: {
    textAlign: 'center',
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
  imagePreview: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  qrContainer: {
    marginTop: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 5,
    color: 'blue',
  },

  imageContainer: {
    width: '100%',
    aspectRatio: 1, // Para mantener el aspecto cuadrado
    overflow: 'hidden',
    marginBottom: 20, // Espacio si hay imagen
  },
  image: {
    marginTop: 3,
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default GenerarQR;
