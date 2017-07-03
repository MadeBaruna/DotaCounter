import React, { Component } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchResultRow from './SearchResultRow';
import { heroes, data } from '../../global';
import FindCounter from '../../FindCounter';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      icon: 'magnify',
      result: [],
    };
  }

  clearSearch() {
    this.setState({ text: '', icon: 'magnify', result: [] });
  }

  search(query) {
    let selections = this.props.getState().selections;
    
    if (query === '') {
      this.setState({ text: '', icon: 'magnify', result: [] });
      return;
    }

    exists = (hero) => {
      for(selection of selections) {
        if(selection.hero === hero)
          return true;
      } 
      return false;
    }

    let result = [];
    for (let hero in heroes) {
      if(exists(hero)) continue;

      let name = heroes[hero].name;
      let code = heroes[hero].codename;
      if (name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        result.push({ name: name, hero: hero, codename: code });
      } else {
        let aliases = heroes[hero].aliases;
        for (let alias of aliases) {
          if (alias.indexOf(query.toLowerCase()) > -1) {
            result.push({ name: name, hero: hero, codename: code });
            break;
          }
        }
      }
    }
    this.setState({ text: query, icon: 'close', result: result });
  }

  renderSeparator() {
    return (
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: "#22282a",
        }}
      />
    );
  };

  addSelection(hero) {
    let selections = this.props.getState().selections;
    this.clearSearch();
    if(selections.length === 5) {
      Alert.alert('Maximum heroes', 'You already have 5 heroes listed!')
      return;
    }
    selections.push(hero);
    let advantages = FindCounter.find(selections);
    this.props.updateState({ selections: selections, advantages: advantages });
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.searchSection}>
          <TouchableHighlight underlayColor='transparent' onPress={() => this.clearSearch()}>
            <Icon style={styles.searchIcon} name={this.state.icon} size={20} color='#eee' />
          </TouchableHighlight>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.search(text)}
            placeholder='Hero name...'
            placeholderTextColor='#ddd'
            value={this.state.text}
          />
        </View>
        <FlatList style={styles.searchResult}
          ItemSeparatorComponent={this.renderSeparator}
          data={this.state.result}
          keyExtractor={item => item.codename}
          renderItem={
            ({ item }) =>
              <SearchResultRow
                onPress={() => this.addSelection(item)}
                key={item.hero} codename={item.codename} name={item.name}
                role={data[item.hero].roles.join(', ')}
              />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
  },
  searchSection: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d3538',
  },
  searchIcon: {
    paddingLeft: 20,
    width: 50,
  },
  input: {
    height: 40,
    backgroundColor: '#2d3538',
    flex: 1,
    margin: 10,
    paddingLeft: 0,
    color: '#eee',
  },
  searchResult: {
    display: 'flex',
    flex: 1,
  }
});