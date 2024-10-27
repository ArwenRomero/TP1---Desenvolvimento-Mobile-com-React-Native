import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://picsum.photos/seed/picsum/500' }} 
          style={styles.movieImage} 
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>The Seventh Seal</Text>
          <Text style={styles.cinema}>Cinema: Cinemark</Text>
          <Text style={styles.time}>Horário: 2h33</Text>
        </View>
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
  card: {
    width: '90%',
    backgroundColor: '#45b1f5',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  movieImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cinema: {
    fontSize: 18,
    color: '#f0f0f0',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: '#f0f0f0',
  },
});
