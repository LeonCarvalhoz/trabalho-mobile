import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Forms = ({ navigation }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const [isInputEmailValid, setIsInputEmailValid] = useState(true);
  const [isInputSenhaValid, setIsInputSenhaValid] = useState(true);

  const onChangeEmail = (value) => {
    setIsInputEmailValid(true);
    setInputEmail(value);
  };

  const onChangeSenha = (value) => {
    setIsInputSenhaValid(true);
    setInputSenha(value);
  };

  const validateInputs = () => {
    if (inputEmail.trim().length < 10) {
      setIsInputEmailValid(false);
      return false;
    }

    if (inputSenha.trim().length < 8) {
      setIsInputSenhaValid(false);
      return false;
    }

    return true;
  };

  const onPressButton = () => {
    if (validateInputs()) {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.cards}>
        <TextInput
          style={styles.text}
          onChangeText={onChangeEmail}
          value={inputEmail}
          placeholder="Digite Email"
        />
        {!isInputEmailValid && <Text>Email deve conter pelo menos 10 caracteres</Text>}
        <TextInput
          style={styles.text}
          onChangeText={onChangeSenha}
          value={inputSenha}
          secureTextEntry={true}
          placeholder="Senha"
        />
        {!isInputSenhaValid && <Text>Senha deve conter pelo menos 8 caracteres</Text>}
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 15,
    marginTop: 15,
  },
  cards: {
    backgroundColor: '#fff',
    borderRadius: 18,
    margin: 50,
    padding: 28,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.60,
    shadowRadius: 14.80,
    elevation: 22,
  },
});

export default Forms;