import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookmark from '../screens/Bookmark.js';
import Categories from '../screens/Categories.js';
import Settings from '../screens/Settings.js'
import HomeStack from '../component/HomeStack.js'


export default function Navigator() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}