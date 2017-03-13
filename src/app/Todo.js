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
        <View style={styles.form}>
          <View style={styles.inputUnderline}>
            <TextInput style={styles.input} onChangeText={this.handleChange.bind(this)} value={this.state.newTodo}/>
          </View>
          <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>tap me</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo,i) => <View style={styles.todo} key={i}><Text style={styles.todoText}>{todo}</Text></View>)}
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30
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
  form : {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    height: 40,
    fontSize: 24
  },
  inputUnderline: {
    flex: 0.7,
    borderColor: 'blue',
    borderBottomWidth: 1,
    marginRight: 10,
    marginLeft: 10
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginRight: 10
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 60
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});
