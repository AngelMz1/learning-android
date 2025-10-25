import React, {useState} from 'react';
import {
    View, 
    Text,
    TextInput,
    Alert,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='ejemplo@correo.com'/>
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD100',
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#000000ff',
    padding: 10,
    margin: 10,
    width: '80%',
    backgroundColor: '#fae68eff',
    paddingLeft: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#f5e7a9ff',
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    width: '45%',
    alignItems: 'center',
  },
  buttonTxt: {
    color: '#000000ff',
    
  }
});

export default Login;