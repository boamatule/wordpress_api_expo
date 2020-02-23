import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isFetching: false,
    }
  }

  componentDidMount() {
    this.fetchLastestPost();
  }

  async fetchLastestPost() {
    const response = await fetch(
      'https://kriss.io/wp-json/wp/v2/posts?per_page=5'
    );
    const posts = await response.json();
    // this.setState({posts});
    this.setState({ posts: posts, isFetching: false});
  }

  onRefresh() {
    this.setState({
      isFetching: true
    },
    function() {
      this.fetchLastestPost()
    })
  }

  render() {
    return (
      <View>
       <Headline style={{ marginLeft: 30 }}>Lastest Post</Headline>
        <FlatList
          data={this.state.posts}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          renderItem={({ item }) => (
              <Card
                style={{
                  shadowOffset: { width: 5, height: 5 },
                  width: '90%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  marginBottom: 10,
                }}>
                <Card.Content>
                  <Title>{item.title.rendered}</Title>
                </Card.Content>
                <Card.Cover
                  source={{ uri: item.jetpack_featured_media_url }}
                />
              </Card>
          )}
          keyExtractor={index => index.toString()}
      />
      </View>
    )
  }
}

export default Home