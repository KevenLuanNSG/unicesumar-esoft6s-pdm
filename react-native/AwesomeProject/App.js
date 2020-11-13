/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button, ToastAndroid} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  
  const abreToast = () => {
    console.log('Hello');
    ToastAndroid.show('Toast do Android', ToastAndroid.LONG);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello Word</Text>

      <Text style={styles.description}>
        Este é meu primeiro app em React Native =)
      </Text>

      <View style={styles.box} />

      <Button onPress={abreToast} title="Abre Toast" color="#666" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
  },
  hello: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: "#666",
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: Colors.black,
    margin: 20,
  },
});

export default App;
