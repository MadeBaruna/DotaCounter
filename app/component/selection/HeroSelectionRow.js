import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Image } from 'react-native';
import HeroImage from '../HeroImage';

export default class HeroSelectionRow extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <HeroImage codename={this.props.codename} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    margin: 5,
    borderColor: '#222528',
    borderWidth: 5
  },
  image: {
    height: 50,
    width: 89,
  },
});