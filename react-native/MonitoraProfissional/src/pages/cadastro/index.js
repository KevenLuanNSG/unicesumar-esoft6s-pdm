import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Chip} from 'react-native-paper';
import Slider from '@react-native-community/slider';

import api from '../../services';


export default function Cadastro({navigation, route}) {
  const [_id] = useState(route.params?._id);
  const [nome, setNome] = useState(route.params?.nome);
  const [titulo, setTitulo] = useState(route.params?.titulo);
  const [especialidade, setEspecialidade] = useState(
    route.params?.especialidade,
  );
  const [valor, setValor] = useState(route.params?.valor);

  const salvaProfissional = async () => {
    const profissional = {
      _id: _id,
      name: nome,
      title: titulo,
      expertise: especialidade,
      hour_value: valor,
    }

    const profissionalAtualizado = await api.put(`professional/${_id}`, profissional);
    alert("Salvo com Sucesso!")
    navigation.navigate('Home', profissionalAtualizado)
  }

  return (
    <View style={styles.container}>
      <View style={styles.box} />

      <TextInput
        style={styles.input}
        onChangeText={(texto) => setNome(texto)}
        value={nome}
        placeholder="Digite seu nome"
      />

      <TextInput
        style={styles.inputTextField}
        onChangeText={(texto) => setEspecialidade(texto)}
        value={especialidade}
        placeholder="Especialidade"
        multiline={true}
        numberOfLines={4}
      />
      <View style={styles.chips}>
        <Chip
          style={styles.chip}
          icon
          selected
          onPress={() => setTitulo('Tec. Agricola')}>
          Tec. Agricola
        </Chip>
        <Chip
          style={styles.chip}
          icon
          onPress={() => setTitulo('Eng. Agricola')}>
          Eng. Agricola
        </Chip>
      </View>
      <View style={styles.chips}>
        <Chip style={styles.chip} icon onPress={() => setTitulo('Zootecnista')}>
          Zootecnista
        </Chip>
        <Chip style={styles.chip} icon onPress={() => setTitulo('Veterinário')}>
          Veterinário
        </Chip>
      </View>

      <Slider
        style={{width: '80%', height: 50}}
        minimumValue={0}
        maximumValue={200}
        minimumTrackTintColor="#1B418C"
        maximumTrackTintColor="#F2C029"
        onValueChange={(valor) => setValor(valor)}
        value={valor}
      />
      <Text>Valor da sua hora: {valor}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => salvaProfissional()}>
        <Text style={{color: '#FFF'}}>Salvar</Text>
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
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  inputTextField: {
    height: 100,
    width: '80%',
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  chips: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  chip: {
    margin: 5,
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
