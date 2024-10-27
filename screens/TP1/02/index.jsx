import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const nomeCompleto = "Arwen Wyann Vieira Romero";
  const horaAtual = new Date().toLocaleTimeString();

  return (
    <View style={styles.container}>
      <Text>Olá, {nomeCompleto}! Agora são {horaAtual}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
