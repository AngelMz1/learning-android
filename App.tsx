import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  return (
    <Login />
  );
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
