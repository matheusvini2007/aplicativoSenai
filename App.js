import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro.js";
import TelaAdministrativa from './TelaAdministrativa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaAdministrativa">
        <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{ headerShown: false }} />
        <Stack.Screen name="TelaAdministrativa" component={TelaAdministrativa} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}