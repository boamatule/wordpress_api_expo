import React, { useContext } from 'react';
import { NavigationContainer,  DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from "react-native-paper";
import Bookmark from '../screens/Bookmark.js';
import Categories from '../screens/Categories.js';
import Settings from '../screens/Settings.js';
import HomeScreen from '../screens/HomeScreen.js';
import SinglePost from '../screens/SinglePost.js';
import CategorieList from '../screens/CategorieList.js';
// import HomeStack from '../component/HomeStack.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from "../component/ThemeController";
import Contact from '../screens/Contact.js';

export default function Navigator() {
  const { theme } = useContext(ThemeContext);
  let paper_theme = theme ? PaperDarkTheme : PaperDefaultTheme;
  let nav_theme = theme ? DarkTheme : DefaultTheme;

  const Stack = createStackNavigator();
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SinglePost" component={SinglePost} />
        {/* <Stack.Screen name="Contact" component={Contact} /> */}
      </Stack.Navigator>
    );
  }

  function CategorieStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="CategorieList" component={CategorieList} />
            {/* <Stack.Screen name="Contact" component={Contact} /> */}

        </Stack.Navigator>
    );
}


  const Tab = createBottomTabNavigator()
  return (
    <PaperProvider theme={paper_theme} > 
      <NavigationContainer theme={nav_theme}>
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
    </PaperProvider>
  );
}

