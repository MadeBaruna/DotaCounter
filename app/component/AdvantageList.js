import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeroAdvantage from './HeroAdvantage';

export default class AdvantageList extends React.PureComponent {
  _keyExtractor = (item, index) => item[0];

  _renderItem = ({ item }) => (
    <HeroAdvantage
      id={item[0]} hero={item[0]} advantage={item[1]}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
