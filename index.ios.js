import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import Styles from './src/app/Styles';

const Main = () => (<Styles />);


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

AppRegistry.registerComponent('FMTodo', () => Main);
