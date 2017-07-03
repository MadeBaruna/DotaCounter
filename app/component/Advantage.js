import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AdvantageList from './AdvantageList';
import HeroAdvantage from './HeroAdvantage';

export default class Advantage extends Component {
  render() {
    let all = this.props.advantages;
    let advantages = all.slice(0, all.length / 2);
    let disadvantages = all.reverse().slice(0, all.length / 2);

    return (
      <View style={styles.view}>
        <View style={[styles.good, styles.advantage]}>
          <Text style={styles.text}>Best Picks</Text>
          <ScrollView>
            <AdvantageList data={advantages}/>
          </ScrollView>
        </View>
        <View style={[styles.bad, styles.advantage]}>
          <Text style={styles.text}>Worst Picks</Text>
          <ScrollView>
            <AdvantageList data={disadvantages}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  advantage: {
    flex: 1,
  },
  good: {
    paddingRight: 10,
    borderRightColor: '#353a3d',
    borderRightWidth: 2
  },
  bad: {
    paddingLeft: 10
  },
  text: {
    textAlign: 'center',
    color: '#f1f1f1',
    marginBottom: 5
  }
});