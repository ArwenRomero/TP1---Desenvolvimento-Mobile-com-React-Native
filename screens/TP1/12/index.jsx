import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

export default function App() {
  const [dataNascimento, setDataNascimento] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIdade = () => {
    Keyboard.dismiss();
    const nascimento = new Date(dataNascimento);
    const agora = new Date();

    if (isNaN(nascimento.getTime())) {
      setResultado('Por favor, insira uma data válida');
      return;
    }

    let anos = agora.getFullYear() - nascimento.getFullYear();
    let meses = agora.getMonth() - nascimento.getMonth();
    let dias = agora.getDate() - nascimento.getDate();
    let horas = agora.getHours() - nascimento.getHours();
    let minutos = agora.getMinutes() - nascimento.getMinutes();

    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      const lastMonth = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += lastMonth.getDate();
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }

    setResultado(`Idade: ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculador de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua data de nascimento (AAAA-MM-DD:MM)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <Button title="Calcular" onPress={calcularIdade} color="#45b1f5" />
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