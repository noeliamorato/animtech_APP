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
    <View style={{ backgroundColor: '#f0f0f0', borderRadius: 20, padding: 30, width: '100%', alignItems: 'center' }}>
       <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>
        <View >
          <Text style={{ fontSize: 20, color: 'red', borderRadius: 50, padding: 8 }}>X</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, marginBottom: 20, color: '#333333' }}>Registro de Usuario</Text>
      <TextInput
        value={registerEmail}
        onChangeText={(text) => setRegisterEmail(text)}
        placeholder="Email"
        style={{ borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 20, width: '100%', backgroundColor: '#ffffff' }}
      />
      <TextInput
        value={registerPassword}
        onChangeText={(text) => setRegisterPassword(text)}
        placeholder="Contraseña"
        secureTextEntry
        style={{ borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 20, width: '100%', backgroundColor: '#ffffff' }}
      />
      <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: '#008F8C', padding: 10, borderRadius: 10, width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 15, color: '#fff' }}>Registrarse</Text>
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
      navigation.navigate('Welcome');
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
        <PageTitle style={{color:"#023535"}}>AnimTech</PageTitle>
        <SubTitle style={{fontSize: 16, color:"#023535", padding:5}}>Tecnología para el bienestar animal y la gestión de animales callejeros</SubTitle>

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
        <TouchableOpacity onPress={handleLogin} style={{ width:'100%', backgroundColor: '#008F8C', padding: 10, borderRadius: 5, marginVertical: 10 }}>
          <Text style={{ textAlign:"center", fontSize: 16, color:"#fff"}}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleRegisterModal} style={{ width:'100%', backgroundColor: '#008F8C', padding: 10, borderRadius: 5, marginVertical: 10}}>
          <Text style={{ textAlign:"center", fontSize: 16, color:"#fff"}}>Registro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#23606E', padding: 10, borderRadius: 5, marginVertical: 10, marginTop:80, marginEnd:230 }}>
          <Text style={{ fontSize: 15, color:"#fff"}}>Comunidad</Text>
        </TouchableOpacity>

        {showRegisterModal && (
          <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#0008', justifyContent: 'center', alignItems: 'center' }}>
            <RegisterModal onClose={toggleRegisterModal} />
          </View>
        )}
      </InnerContainer>
    </StyledContainer>
  );
};

export default Login;
