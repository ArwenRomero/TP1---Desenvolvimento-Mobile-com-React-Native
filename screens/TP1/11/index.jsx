import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPalindromo = () => {
    Keyboard.dismiss();
    const textoFormatado = texto.replace(/[\W_]/g, '').toLowerCase();
    const textoReverso = textoFormatado.split('').reverse().join('');

    if (textoFormatado === '') {
      setResultado('Por favor, insira um texto válido');
    } else {
      setResultado(textoFormatado === textoReverso ? 'É um palíndromo ✅' : 'Não é um palíndromo ❌');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Palíndromo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Verificar" onPress={verificarPalindromo} color="#45b1f5" />
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
