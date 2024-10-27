import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const imagens = [
    { uri: 'https://picsum.photos/250', titulo: 'Imagem 1' },
    { uri: 'https://picsum.photos/200', titulo: 'Imagem 2' },
    { uri: 'https://picsum.photos/300', titulo: 'Imagem 3' },
  ];

  const [imagemAtual, setImagemAtual] = useState(imagens[0]);

  const alterarImagem = () => {
    const novaImagem = imagens[Math.floor(Math.random() * imagens.length)];
    setImagemAtual(novaImagem);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagemAtual.uri }} style={styles.imagem} />
      <Text>{imagemAtual.titulo}</Text>
      <Button title="Mudar Imagem" onPress={alterarImagem} />
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
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});