import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet} from 'react-native';
import ButtonBasic from './src/components/ButtonBasic';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonBasic />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
