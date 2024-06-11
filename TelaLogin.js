import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from "react-native";

export default function TelaLogin({ navigation }) {
  const [senhaOculta] = useState(true);
  const [usuarioDigitado, setUsuarioDigitado] = useState('');
  const [senhaDigitada, setSenhaDigitada] = useState('');

  function fazerLogin() {
    if (usuarioDigitado === "ALUNO" && senhaDigitada === "1234") {
      navigation.navigate("TelaAdministrativa");
    } else {
      Alert.alert("Aviso", "Usuário e/ou senha incorretos!");
    }
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.tituloContainer}>
        <Text style={{color: 'white', fontSize: 45}}>Login</Text>
      </View>
      
      <View style={estilos.cxContainer}>
        <TextInput
          style={estilos.input}
          placeholder="Usuário"
          placeholderTextColor="#959595"
          onChangeText={setUsuarioDigitado}
          value={usuarioDigitado}
        />
      
        <TextInput
          style={estilos.input}
          placeholder="Senha"
          placeholderTextColor="#959595"
          secureTextEntry={senhaOculta}
          onChangeText={setSenhaDigitada}
          value={senhaDigitada}
        />

        <TouchableOpacity style={estilos.botao} onPress={fazerLogin}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("TelaCadastro")}>
          <Text style={estilos.textoLink}>Não tenho conta</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.imagemContainer}>
        <Image
          source={require('./assets/logo_senai.png' )}
          style={estilos.imagem}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3850D2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  tituloContainer: {
    marginBottom: 110,
  },
  titulo: {
    marginTop: 50,
    fontSize: 45,
    color: '#FFFFF'
  },
  cxContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 5
  },
  botao: {
    backgroundColor: '#6079FF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 15,
  },
  textoBotao: {
    color: "#ffffff", 
    fontSize: 25,
    fontWeight: '700',
  },
  textoLink: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  imagemContainer: {
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    width: 200,
    height: 200,
  },
});