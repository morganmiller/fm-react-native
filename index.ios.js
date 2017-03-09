/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { FMTodo } from './src/app/FMTodo';

const Main = () => (<FMTodo />);

AppRegistry.registerComponent('Main', () => Main);
