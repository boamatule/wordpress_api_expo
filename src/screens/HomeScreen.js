import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
  Headline
} from 'react-native-paper';
<<<<<<< HEAD
import ContentPlaceholder from '../component/ContentPlaceholder';
=======
import ContentPlaceholder from '../component/ContentPlaceholder'

>>>>>>> development
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isFetching: false,
      page: 1
    }
  }

  componentDidMount() {
    this.fetchLastestPost();
  }

  async fetchLastestPost() {
    let page = this.state.page;
    const response = await fetch(
      `https://kriss.io/wp-json/wp/v2/posts?per_page=5&page=${page}`,
    );
    const posts = await response.json();
    this.setState({ 
      posts: page === 1 ? posts : [...this.state.posts, ...posts],
      isFetching: false
    });
  }

  onRefresh() {
    this.setState({
      isFetching: true
    },
    function() {
      this.fetchLastestPost()
    })
  }

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.fetchLastestPost();
      },
    );
  };

<<<<<<< HEAD
  render() { 
    if (this.state.isFetching) {
      return <ContentPlaceholder /> 
    } else {
=======
  render() {
    if (this.state.isFetching) {
      return <ContentPlaceholder />;
    } else { 
>>>>>>> development
      return ( 
      <View> 
       <Headline style={{ marginLeft: 30 }}>Lastest Post</Headline>
        <FlatList
          data={this.state.posts}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SinglePost', {
                   post_id: item.id
                })
              }> 
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
            </TouchableOpacity>
          )}
          keyExtractor={index => index.toString()}
      />
      </View>
    )
  }
}

<<<<<<< HEAD
renderFooter = () => {
  if (this.state.isFetching) return null;
=======
  renderFooter = () => {
    if (this.state.isFetching) return null;
>>>>>>> development
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


export default Home