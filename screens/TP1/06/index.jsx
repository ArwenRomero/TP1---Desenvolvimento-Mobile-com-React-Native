import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.contadorText}>{contador}</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={incrementar} style={styles.button} underlayColor="#1e90ff">
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrementar} style={styles.button} underlayColor="#1e90ff">
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contadorText: {
    fontSize: 48,
    color: '#45b1f5',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
  },
  button: {
    padding: 10,
    backgroundColor: '#45b1f5',
    borderRadius: 5,
    width: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});
