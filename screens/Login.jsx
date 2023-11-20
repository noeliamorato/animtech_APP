import React, { useState } from 'react';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle } from './../components/styles';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

const app = initializeApp(firebaseConfig);

const RegisterModal = ({ onClose }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const auth = getAuth(app);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log('Usuario registrado:', userCredential.user);
      onClose(); // Cierra la pantalla de registro después de un registro exitoso
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      // Manejo de errores - puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, width: '80%', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Registro de usuario</Text>
      <TextInput
        value={registerEmail}
        onChangeText={(text) => setRegisterEmail(text)}
        placeholder="Email"
        style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 15, width: '100%' }}
      />
      <TextInput
        value={registerPassword}
        onChangeText={(text) => setRegisterPassword(text)}
        placeholder="Contraseña"
        secureTextEntry
        style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 15, width: '100%' }}
      />
      <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: '#3498db', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: 'white' }}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const Login = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const auth = getAuth(app);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario autenticado:', userCredential.user);
      navigation.navigate('MapScreen');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejo de errores - puedes mostrar un mensaje de error al usuario
    }
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo source={require('./../assets/img/logo2.jpg')} />
        <PageTitle>AnimTech</PageTitle>
        <SubTitle>Tecnología para el bienestar animal y la gestión de animales callejeros</SubTitle>

        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={{ borderWidth: 1, borderRadius: 5, padding: 8, marginVertical: 5, width: '100%' }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Contraseña"
          secureTextEntry
          style={{ borderWidth: 1, borderRadius: 5, padding: 8, marginVertical: 5, width: '100%' }}
        />
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'lightblue', padding: 10, borderRadius: 5, marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleRegisterModal} style={{ borderWidth: 1, borderRadius: 10, padding: 10, margin: 5 }}>
          <Text>Registro</Text>
        </TouchableOpacity>

        {showRegisterModal && (
          <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
            <RegisterModal onClose={toggleRegisterModal} />
          </View>
        )}
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
