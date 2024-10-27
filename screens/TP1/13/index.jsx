import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim().length > 0) {
      setListaTarefas([...listaTarefas, { id: Math.random().toString(), texto: tarefa }]);
      setTarefa('');
    }
  };

  const removerTarefa = (id) => {
    setListaTarefas(listaTarefas.filter(t => t.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.texto}</Text>
      <TouchableOpacity onPress={() => removerTarefa(item.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <Button title="Adicionar" onPress={adicionarTarefa} color="#45b1f5" />
      <FlatList
        data={listaTarefas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.lista}
      />
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
  lista: {
    width: '100%',
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#45b1f5',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  remover: {
    color: '#ff0000',
    fontSize: 20,
  },
});