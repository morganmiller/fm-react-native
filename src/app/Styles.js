import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';
import StatusBarPadding from './StatusBarPadding'
import { styles } from './styles'

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
