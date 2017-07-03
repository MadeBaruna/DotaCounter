import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HeroSelectionRow from './HeroSelectionRow';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FindCounter from '../../FindCounter';

export default class HeroSelection extends Component {
  removeSelection(hero) {
    let selections = this.props.selections;
    selections = selections.filter((e) => 
      e.hero !== hero
    )
    let advantages = FindCounter.find(selections);
    this.props.updateState({ selections: selections, advantages: advantages });
  }

  render() {
    list = this.props.selections.map((hero) =>
      <HeroSelectionRow onPress={() => this.removeSelection(hero.hero)}
        key={hero.hero} name={hero.name} codename={hero.codename} />
    );

    return (
      <View>
        <View style={styles.information}>
          <Icon name='information-outline' size={20} color='#999' />
          {this.props.selections.length === 0 ?
            <Text style={styles.text}> Add a hero first!</Text> :
            <Text style={styles.text}> Tap hero icon to remove it</Text>
          }
        </View>
        <View style={styles.container}>
          {list}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  information: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: '#999',
    lineHeight: 18,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
});