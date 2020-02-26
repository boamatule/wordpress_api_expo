import React, { Component } from "react";
import { FlatList, ScrollView, View, TouchableOpacity } from "react-native";
import { Card, Title } from "react-native-paper";
import ContentCard from '../component/ContentCard.js'
export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      categories: []
    };
  }
  

  componentDidMount() {
    this.fetchcategorie();
  }
  async fetchcategorie() {
    this.setState({ loading: true });
    const response = await fetch(`https://kriss.io/wp-json/wp/v2/categories`);
    const categories = await response.json();

    this.setState({
      categories: categories
    });
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.state.categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('CategorieList', {
                  categorie_id: item.id,
                  categorie_name: item.name
                })
              }
            >
              <Card>
                <Card.Content>
                  <Title>{item.name}</Title>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    );
  }
}
