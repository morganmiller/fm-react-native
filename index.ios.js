import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import Todo from './src/app/Todo';

const Main = () => (<Todo />);

AppRegistry.registerComponent('FMTodo', () => Main);
