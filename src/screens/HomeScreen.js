import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

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