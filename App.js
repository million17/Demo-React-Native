import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FlatListBasic from './src/components/flatlist/FlatListBasic';

export default class App extends Component {
  render() {
    return (
      <View>
        <FlatListBasic />
      </View>
    );
  }
}
