import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [botaoPressionado, setBotaoPressionado] = useState("Nenhum");

  return (
    <View style={styles.container}>
      <Text>Botão pressionado: {botaoPressionado}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Vermelho" color="red" onPress={() => setBotaoPressionado("Vermei")} />
        <Button title="Verde" color="green" onPress={() => setBotaoPressionado("Verde")} />
        <Button title="Azul" color="blue" onPress={() => setBotaoPressionado("Azul")} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
