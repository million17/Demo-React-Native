import React, {Component} from 'react';
import {Alert, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Button from 'react-native-button';

export default class ButtonBasic extends Component {
  _onPressButton() {
    Alert.alert('This button alert !');
  }
  render() {
    return (
      <View>
        <Text>Button</Text>
        <Button onPress={this._onPressButton} style={styles.buttonBasic}>
          Button Basic
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonBasic: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
