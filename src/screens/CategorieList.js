import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity, 
  ActivityIndicator
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  List, 
  Headline
} from 'react-native-paper';
import moment from 'moment';
import HTMLRender from 'react-native-htmlview';
import ImageLoad from 'react-native-image-placeholder';
import ContentCard from '../component/ContentCard.js'


export default class CategorieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    this.fetchPost();
  }
  async fetchPost() {
    let categorie_id = this.props.route.params.categorie_id
    const response = await fetch(
      `https://kriss.io/wp-json/wp/v2/posts?categories=${categorie_id}`,
    );
    const posts = await response.json();
    this.setState({posts});
  }

  render() { 
    // let categorie_name = this.props.route.params.categorie_name
      return (
        <View>
          <Title style={{ marginLeft: 30 }} >{categorie_name}</Title>
          <FlatList
            data={this.state.posts}
            renderItem={({ item }) => (
              <ContentCard item={item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
}