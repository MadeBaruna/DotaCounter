import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import HeroImage from '../HeroImage';

export default class SearchResultRow extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <HeroImage codename={this.props.codename} />
          <View style={styles.info}>
            <Text style={styles.text}>
              {this.props.name}
            </Text>
            <Text style={styles.subtext}>
              {this.props.role}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2d3538',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    color: '#eee'
  },
  subtext: {
    marginLeft: 12,
    fontSize: 12,
    color: '#aaa'
  },
  image: {
    height: 50,
    width: 89,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  }
});