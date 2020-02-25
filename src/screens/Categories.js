import React, { Component } from 'react';
import {
  FlatList,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import { Card, Title } from 'react-native-paper';

export default class Categories extends Component {
  constructor(prop) {
    super(props);

    this.state = {
      loading: false,
      categories: []
    };
  }
  render() {
    return (
      <View>
        <Text>Ye</Text>
      </View>
    )
  }
}
