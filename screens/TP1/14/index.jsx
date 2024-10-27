import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    let res;

    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, insira números válidos.');
      return;
    }

    switch (operacao) {
      case 'soma':
        res = num1 + num2;
        break;
      case 'subtracao':
        res = num1 - num2;
        break;
      case 'multiplicacao':
        res = num1 * num2;
        break;
      case 'divisao':
        res = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
        break;
      default:
        return;
    }

    Keyboard.dismiss();

    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <View style={styles.botoes}>
        <Button title="+" onPress={() => calcular('soma')} color="#45b1f5" />
        <Button title="-" onPress={() => calcular('subtracao')} color="#45b1f5" />
        <Button title="*" onPress={() => calcular('multiplicacao')} color="#45b1f5" />
        <Button title="/" onPress={() => calcular('divisao')} color="#45b1f5" />
      </View>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
    marginBottom: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  resultado: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
  },
});