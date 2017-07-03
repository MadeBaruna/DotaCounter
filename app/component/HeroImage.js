import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import CachedImage from 'react-native-cached-image';

export default class HeroSelection extends Component {
  render() {
    return (
      <CachedImage
        style={styles.image}
        source={{ uri: `http://cdn.dota2.com/apps/dota2/images/heroes/${this.props.codename}_full.png` }}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 89,
  }
});