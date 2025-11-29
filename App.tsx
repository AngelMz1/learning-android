import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/Splash';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Main from './src/screens/Main';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('login');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (currentScreen === 'register') {
    return <Register onBackToLogin={() => setCurrentScreen('login')} />;
  }
  
  if (currentScreen === 'main') {
    return <Main onLogout={() => setCurrentScreen('login')} />;
  }
  
  return <Login 
    onGoToRegister={() => setCurrentScreen('register')}
    onLoginSuccess={() => setCurrentScreen('main')} 
  />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbe0b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '50%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
