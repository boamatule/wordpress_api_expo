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

  componentDidMount() {
    this.fetchLastestPost();
  }

  async fetchLastestPost() {
    const response = await fetch(
      'https://kriss.io/wp-json/wp/v2/posts?per_page=5'
    );
    const posts = await response.json();
    this.setState({posts});
  }

  render() {
    return (
      <View>
        <Card 
          style={{
            shadowOffset: {width: 5, height: 5},
            width: '90%',
            borderRadius: 12,
            alignSelf: 'center',
            marginBottom: 10,
          }}> 
          <Card.Content>
            <Title>Blog post</Title>
              <Card.Cover
                style={{
                  width: 350,
                  height: 190,
                  alignSelf: 'center',
                }}
                source={{
                  uri:
                  'https://images.unsplash.com/photo-1580111116173-171ccf58fe3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                }}
              />
            <Paragraph>Just a blog post</Paragraph>
          </Card.Content>
        </Card>
      </View>
    )
  }
}

export default Home