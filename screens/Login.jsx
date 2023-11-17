import React, { useState } from 'react';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, Button } from './../components/styles';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('MapScreen');
  }

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo  source={require('./../assets/img/logo2.jpg')} />
        <PageTitle>AnimTech</PageTitle>
        <SubTitle>Tecnología para el bienestar animal y la gestión de animales callejeros</SubTitle>

      <View style={{gap:20,margin:20, justifyContent:"center",alignItems:"center",}} >
       
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email"
          style={{width:280, borderWidth:1, borderColor:"#0005",borderRadius:10, paddingHorizontal:10,paddingVertical:5,}}
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
          placeholder="Password"
          style={{width:280, borderWidth:1, borderColor:"#0005",borderRadius:10, paddingHorizontal:10,paddingVertical:5,}}
        />
        {/* <Button title="Iniciar Sesión" onPress={handleLogin} /> */}
        <TouchableOpacity style={{borderWidth:1,borderRadius:10 ,width:"100%",paddingHorizontal:10, paddingVertical:5, borderColor: "#0005"}}
        onPress={handleLogin} >
          <Text>
          Iniciar Sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderRadius:10 ,width:"100%",paddingHorizontal:10, paddingVertical:5, borderColor: "#0005"}}>
          <Text>
          Registro
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderRadius:10 ,width:"100%",paddingHorizontal:10, paddingVertical:5, borderColor: "#0005"}} >
          <Text>
          Iniciar con Google
          </Text>
        </TouchableOpacity>

      </View>
      </InnerContainer>

    </StyledContainer>
  );
};

export default Login;
