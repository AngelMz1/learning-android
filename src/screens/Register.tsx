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
import { supabase } from '../config/supabase';
import { ScrollView } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';



function Register({ onBackToLogin = () => {} }) {
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters long');
      return false;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one lowercase letter');
      return false;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one uppercase letter');
      return false;
    }
    if (!/(?=.*\d)/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one number');
      return false;
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      Alert.alert('Error', 'Password must contain at least one special character (@$!%*?&)');
      return false;
    }
    return true;
  };

  const goRegister = async () => {
    if (!firstName || !lastName || !mobileNumber || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    if (!validatePassword(password)) {
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          mobile_number: mobileNumber,
        }
      }
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Registration successful! Check your email to confirm your account.');
      onBackToLogin();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder='First Name'
          placeholderTextColor='#6B7280'
          value={firstName}
          onChangeText={setFirstName}/>
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          placeholderTextColor='#6B7280'
          value={lastName}
          onChangeText={setLastName}/>
        <TextInput
          style={styles.input}
          placeholder='Mobile Number'
          placeholderTextColor='#6B7280'
          value={mobileNumber}
          onChangeText={setMobileNumber}/>
        <TextInput
          style={styles.input}
          placeholder='example@mail.com'
          placeholderTextColor='#6B7280'
          value={email}
          onChangeText={setEmail}/>
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#6B7280'
          value={password}
          onChangeText={setPassword}
          secureTextEntry/>
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          placeholderTextColor='#6B7280'
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry/>
        <TouchableOpacity 
            onPress={goRegister}
            style={styles.button}>
        <Text style={styles.buttonTxt}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBackToLogin} style={styles.linkButton}>
        <Text style={styles.linkText}>I already have an account</Text>
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
    backgroundColor: '#1E40AF',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#D1D5DB',
    padding: 16,
    marginVertical: 6,
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
  button: {
    backgroundColor: '#F59E0B',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
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
    marginBottom: 24,
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
  linkButton: {
    marginTop: 16,
    paddingVertical: 8,
  },
  linkText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default Register;