import React, {useState} from 'react';
import {
    View, 
    Text,
    TextInput,
    Alert,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import { supabase } from '../config/supabase';

function Login({ onGoToRegister = () => {}, onLoginSuccess = () => {} }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      onLoginSuccess();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='example@email.com'
          placeholderTextColor='#6B7280'
          onChangeText={setEmail}/>
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#6B7280'
          onChangeText={setPassword}
          secureTextEntry/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleLogin}>
            <Text style={styles.buttonTxt}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={onGoToRegister}>
            <Text style={styles.buttonTxt}>Sign Up</Text>
          </TouchableOpacity>
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
    backgroundColor: '#1E40AF', // Azul profesional
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#D1D5DB',
    padding: 16,
    marginVertical: 8,
    width: '100%',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#1F2937',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    gap: 12,
  },
  button: {
    backgroundColor: '#F59E0B', // Amarillo vibrante
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonTxt: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 32,
    textAlign: 'center',
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 32,
    borderRadius: 20,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
});

export default Login;