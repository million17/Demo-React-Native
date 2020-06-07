import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet } from 'react-native'
import Button from 'react-native-button'
import ButtonBasic from './src/components/ButtonBasic'

export default class App extends Component {
  _onPressButton = () => {
    Alert.alert("Click show alert !");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Button</Text>
        <ButtonBasic/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
