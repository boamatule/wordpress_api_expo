import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js';
import SinglePost from '../screens/SinglePost.js'

export default function HomeStack() {
const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={SinglePost} />
    </Stack.Navigator>
  )
}