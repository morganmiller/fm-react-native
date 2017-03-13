import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{height: 60, backgroundColor: 'red'}} onChangeText={this.handleChange.bind(this)} value={this.state.newTodo}/>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>tap me</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo,i) => <Text key={i}>{todo}</Text>)}
      </View>
    );
  }
  handleChange(text) {
    this.setState({newTodo: text});
  }
  handlePress(e) {
    let todos = this.state.todos;
    todos.push(this.state.newTodo);
    this.setState({todos: todos, newTodo: ''});
  }
}
