import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { supabase } from '../config/supabase';

function Main({ onLogout = () => {} }) {
  const [userName, setUserName] = useState('')

  const getUserData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const firstName = user.user_metadata?.first_name || user.email?.split('@')[0] || 'Usuario';
      setUserName(firstName);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      onLogout();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Bienvenido {userName}</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Image 
              source={require('../assets/images/cerrar-sesion.png')} 
              style={styles.image} 
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Pantalla Principal</Text>        
      </View>
      <ScrollView>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1E40AF',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: '#F59E0B',
    marginLeft: 12,
  },
});

export default Main;