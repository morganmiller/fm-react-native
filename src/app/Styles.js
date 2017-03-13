import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import StatusBarPadding from './StatusBarPadding'

const {width, height} = Dimensions.get('window');

export default class Styles extends Component {
  render () {
    console.log('rendering styles')
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
        <Text style={styles.text}>Fancy</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef235f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'yellow',
    width: width/2,
    height: width/2,
    borderRadius: width/4,
    marginBottom: 100
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Arial'
  }
});
