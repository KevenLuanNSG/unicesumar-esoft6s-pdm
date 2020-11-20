import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Chip} from 'react-native-paper';

import api from '../../services';

export default function Home({navigation, route}) {
  const [profissional, setProfissional] = useState({});

  const getProfissional = async () => {
    try {
      const res = await api.get('/professional/5fb6d0a3d489c31edfc6380e');
      console.log(res);
      profissional._id = res.data._id;
      profissional.nome = res.data.name;
      profissional.titulo = res.data.title;
      profissional.especialidade = res.data.expertise;
      profissional.valor = res.data.hour_value;
      setProfissional(profissional);
    } catch (error) {
      console.error(error);
    }
  };
  getProfissional();

  return (
    <View style={styles.container}>
      <View style={styles.box} />

      <Text style={styles.nome}>{profissional.nome}</Text>

      <Chip style={styles.chip}>{profissional.titulo}</Chip>

      <Text style={styles.especialidade}>{profissional.especialidade}</Text>
      <Text style={styles.valor}> R$ {profissional.valor} hr </Text>

      {/* <Button
        title="Editar"
        onPress={() => navigation.navigate('Cadastro', profissional)}
      /> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro', profissional)}>
        <Text style={{color: '#FFF'}}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#666',
    marginTop: 10,
  },
  nome: {
    marginTop: 10,
    padding: 20,
    fontSize: 35,
    color: '#1B418C',
    fontWeight: 'bold',
  },
  chip: {
    marginTop: 10,
  },
  especialidade: {
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
  valor: {
    padding: 20,
    textAlign: 'center',
    fontSize: 50,
    color: '#1B418C',
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: '#1B418C',
    borderRadius: 20,
    marginTop: 20,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
