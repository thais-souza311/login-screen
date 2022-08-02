import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput style={styles.textInput} placeholder={'Digite seu e-mail'} />
      <TextInput style={styles.textInput} placeholder={'Digite sua senha'} />
      <TouchableOpacity style={{margin: 12}}>
        <Text style={styles.text}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin: 12}}>
        <Text style={styles.text}>Cadastrar usuário</Text>
      </TouchableOpacity>
      <Button title="Continuar"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textInput: {
    width: '90%',
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  text: {
    textDecorationLine: 'underline',
  },
});
