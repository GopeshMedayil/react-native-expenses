/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SimpleButton from './App/Components/SimpleButton';
const Realm = require('realm');

class Expenses extends Component {
  render() {
    let realm = new Realm({
      schema: [{ name: 'Dog', properties: { name: 'string' } }]
    });

    realm.write(() => {
      realm.create('Dog', { name: 'Rex' });
    });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Count of Dogs in Realm: {realm.objects('Dog').length}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Expenses', () => Expenses);
