import React from 'react';
import { StyleSheet } from 'react-native';
import Navigators from './src/component/Navigators'

export default function App() {
  return (
   <Navigators />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
