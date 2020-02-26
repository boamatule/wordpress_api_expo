import React, { Component } from 'react'
import { ActivityIndicator, View, FlatList, TouchableOpacity } from 'react-native'
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  List,
  Headline,
} from 'react-native-paper';
import HTMLRender from 'react-native-htmlview'
import ImageLoad from 'react-native-image-placeholder';
import moment from 'moment'
export default ({ item, navigation }) => {
  return (
    <View>
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('SinglePost', {
                    post_id: item.id,
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
                    <Paragraph>Published on {moment(item.date).fromNow()}</Paragraph>
                </Card.Content>
                <ImageLoad
                    style={{ width: '100%', height: 300 }}
                    loadingStyle={{ size: 'large', color: 'blue' }}
                    source={{ uri: item.jetpack_featured_media_url }}
                />
                <Card.Content>
                    <HTMLRender value={item.excerpt.rendered} />
                </Card.Content>
            </Card>
        </TouchableOpacity>
    </View>
  )
}