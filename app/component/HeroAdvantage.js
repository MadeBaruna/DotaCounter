import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import HeroImage from './HeroImage';
import { heroes } from '../global';

export default class HeroAdvantage extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <HeroImage codename={heroes[this.props.hero].codename} />
          <View style={styles.data}>
            <Text style={styles.text}>
              {heroes[this.props.hero].name}
            </Text>
            <Text style={styles.subtext}>
              {(this.props.advantage * -1).toFixed(2)}%
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
    marginBottom: 3
  },
  data: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    right: 5
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
    color: '#eee',
    textAlign: 'right',
    backgroundColor: '#2d353899',
    paddingLeft: 5
  },
  subtext: {
    marginLeft: 12,
    fontSize: 16,
    color: '#aaa',
    textAlign: 'right',
  },
  image: {
    height: 50,
    width: 89,
  }
});