import React, { Component, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { List, Switch, Icon } from "react-native-paper";
import { ThemeContext } from "../component/ThemeController";

const Settings = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <View>
      <List.Item
        title="Dark Mode"
        left={() => <List.Icon icon="brightness-4" />}
        right={() => <Switch value={theme} onValueChange={toggleTheme} />}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Contact')}>
        <List.Item
          title="Contact Us"
          left={() => <List.Icon icon ="chevron-right" />}
          />    
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
