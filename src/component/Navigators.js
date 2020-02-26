import React, { PureComponent } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookmark from '../screens/Bookmark.js';
import Categories from '../screens/Categories.js';
import Settings from '../screens/Settings.js';
import HomeScreen from '../screens/HomeScreen.js';
import SinglePost from '../screens/SinglePost.js';
import CategorieList from '../screens/CategorieList.js';
// import HomeStack from '../component/HomeStack.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Navigator() {
  const Stack = createStackNavigator();
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SinglePost" component={SinglePost} />
      </Stack.Navigator>
    );
  }

  function CategorieStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="CategorieList" component={CategorieList} />
        </Stack.Navigator>
    );
}


  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Categories') {
            iconName = focused ? 'apps' : 'apps-box';
        } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-box';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
          )
        },
      })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
       > 
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Categories" component={CategorieStack} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>

    </NavigationContainer>
  );
}

