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
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class FMTodo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3],
      newTodo: ''
    }
  }
  render() {
    console.log('STATE:')
    console.log(this.state)
    return (
      <View style={styles.container}>
        <TextInput style={{height: 60, backgroundColor: 'red'}} onChange={this.handleChange.bind(this)} value={this.state.newTodo}/>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>tap me</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo,i) => <Text key={i}>{todo}</Text>)}
      </View>
    );
  }
  handleChange(e) {
    let value = e.nativeEvent.text;
    this.setState({newTodo: value});
  }
  handlePress(e) {
    let todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({todos: todos, newTodo: ''});
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

AppRegistry.registerComponent('FMTodo', () => FMTodo);
