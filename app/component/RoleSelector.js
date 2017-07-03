import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HeroSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: [true, true, true, true, true],
    }
  }

  toggle(index) {
    let active = this.state.active;
    active[index] = !active[index];
    this.setState({ active: active });
    
    let roles = ['Carry', 'Support', 'Disabler', 'Initiator', 'Nuker'];
    let activeRoles = roles.filter((x, i) => active[i]);
    this.props.updateState({roles: activeRoles});
  }

  render() {
    return (
      <View style={styles.view}>
        <TouchableHighlight onPress={() => this.toggle(0)} style={styles.button} underlayColor='transparent'> 
          <View style={styles.wrapper}>
            <Icon style={this.state.active[0] ? styles.icon : styles.iconDisabled} name={this.state.active[0] ? 'check' : 'close'} />
            <Text style={this.state.active[0] ? styles.text : styles.textDisabled}> Carry</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.toggle(1)} style={styles.button} underlayColor='transparent'>
          <View style={styles.wrapper}>
            <Icon style={this.state.active[1] ? styles.icon : styles.iconDisabled} name={this.state.active[1] ? 'check' : 'close'} />
            <Text style={this.state.active[1] ? styles.text : styles.textDisabled}> Support</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.toggle(2)} style={styles.button} underlayColor='transparent'>
          <View style={styles.wrapper}>
            <Icon style={this.state.active[2] ? styles.icon : styles.iconDisabled} name={this.state.active[2] ? 'check' : 'close'} />
            <Text style={this.state.active[2] ? styles.text : styles.textDisabled}> Disabler</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.toggle(3)} style={styles.button} underlayColor='transparent'>
          <View style={styles.wrapper}>
            <Icon style={this.state.active[3] ? styles.icon : styles.iconDisabled} name={this.state.active[3] ? 'check' : 'close'} />
            <Text style={this.state.active[3] ? styles.text : styles.textDisabled}> Initiator</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.toggle(4)} style={styles.button} underlayColor='transparent'>
          <View style={styles.wrapper}>
            <Icon style={this.state.active[4] ? styles.icon : styles.iconDisabled} name={this.state.active[4] ? 'check' : 'close'} />
            <Text style={this.state.active[4] ? styles.text : styles.textDisabled}> Nuker</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#2d3538',
    borderTopColor: '#353a3d',
    borderTopWidth: 1
  },
  text: {
    color: '#eee',
    fontSize: 12
  },
  textDisabled: {
    color: '#999',
    fontSize: 12
  },
  button: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 16,
    color: '#eee'
  },
  iconDisabled: {
    fontSize: 16,
    color: '#aaa'
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});