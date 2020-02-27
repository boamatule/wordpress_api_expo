import React from 'react';
import { StyleSheet } from 'react-native';
import Navigators from './src/component/Navigators'
import { ThemeController } from "./src/component/ThemeController";

export default function App() {
  return (
    <ThemeController>
      <Navigators />
    </ThemeController>
  );
}