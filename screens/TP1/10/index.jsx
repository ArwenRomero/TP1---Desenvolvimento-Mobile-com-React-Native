import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPrimo = () => {
    Keyboard.dismiss(); 
    const num = parseInt(numero);

    if (isNaN(num) || num < 2) {
      setResultado('Por favor, insira um número válido maior que 1');
      return;
    }

    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrimo = false;
        break;
      }
    }

    setResultado(isPrimo ? 'O número é PRIMO ✅' : 'O número NÃO é Primo ❌');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Número Primo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Verificar" onPress={verificarPrimo} color="#45b1f5" />
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#45b1f5',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#45b1f5',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 20,
    color: '#45b1f5',
    marginTop: 20,
  },
});