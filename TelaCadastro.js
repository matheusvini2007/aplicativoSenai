import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('As senhas não correspondem!');
      return;
    }
  }
  

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cadastro</Text>
      
      <TextInput
        style={estilos.TxtCds}
        placeholder="Nome completo"
        onChangeText={setFullName}
      />
      <TextInput
        style={estilos.TxtCds}
        placeholder="Usuário"
        onChangeText={setUsername}
      />
      <TextInput
        style={estilos.TxtCds}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={estilos.TxtCds}
        placeholder="Repita a senha"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      
      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate("TelaLogin")}>
          <Text style={estilos.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
        
      <Image
          source={require('./assets/logo_senai.png')}
          style={estilos.imagem}
        />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3850D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 33,
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 50
  },
  imagem: {
    width: 150,
    height: 150,
    marginTop: 100,
  },
  TxtCds: {
    height: 50,
    width: '80%',
    borderColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10
  },
  botao: {
    backgroundColor: '#6079FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 60,
    color: 'white'
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
  },
});