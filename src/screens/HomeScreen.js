import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
  Headline,
} from 'react-native-paper';

export class Home extends Component {
  render() {
    return (
      <View>
        <Button title="Go to single post" onPress={() =>
        this.props.navigation.navigate('SinglePost')} />
      </View>
    )
  }
}

export default Home