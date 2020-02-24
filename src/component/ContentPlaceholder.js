import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from "rn-placeholder";
import ImageLoad from 'react-native-image-placeholder';
export class ContentPlaceholder extends Component {
  render() {
    return (
      <View style={{ marginTop: 23, padding: 33 }}>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
        >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
         >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
            <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
         >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
            <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
         >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
         >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <Placeholder
          Animation={Fade}
          Left={PlaceholderMedia}
          Right={PlaceholderMedia}
         >
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
        <ImageLoad
          style={{ width: '100%', height: 300 }}
          loadingStyle={{ size: 'large', color: 'blue' }}
          source={{ uri: item.jetpack_featured_media_url }}
        />
      </View>
    )
  }
}
export default ContentPlaceholder