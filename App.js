import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  View,
  Text,
} from 'react-native';
import SearchBar from './app/component/search/SearchBar'
import HeroSelection from './app/component/selection/HeroSelection';
import Advantage from './app/component/Advantage';
import RoleSelector from './app/component/RoleSelector';
import FindCounter from './app/FindCounter';

export default class DotaCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: [],
      advantages: [],
      roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Nuker']
    };
  }

  getState() {
    return this.state;
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <View style={styles.main}>
        <StatusBar
          backgroundColor="#2d3538"
          barStyle="light-content"
        />
        <View style={styles.search}>
          <SearchBar getState={() => this.getState()} updateState={(e) => this.updateState(e)} />
        </View>
        <View style={styles.content}>
          <HeroSelection selections={this.state.selections} updateState={(e) => this.updateState(e)} />
          <Advantage advantages={FindCounter.filter(this.state.advantages, this.state.roles)} />
        </View>
        <RoleSelector updateState={(e) => this.updateState(e)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#2b3033',
  },
  search: {
    position: 'absolute',
    zIndex: 999,
    left: 0,
    right: 0,
    backgroundColor: '#2b3033',
    elevation: 2
  },
  content: {
    display: 'flex',
    flex: 1,
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10
  }
});
