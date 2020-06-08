import React, {Component} from 'react';
import {Text, View, Alert, StyleSheet} from 'react-native';
import ButtonBasic from './src/components/ButtonBasic';
import VeticalScrollView from './src/components/VeticalScrollView';
import HorizontalScrollView from './src/components/HorizontalScrollView';
import FlatListBasic from './src/components/FlatListBasic';

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <ButtonBasic /> */}
        {/* <VeticalScrollView /> */}
        {/* <HorizontalScrollView /> */}
        <FlatListBasic />
      </View>
    );
  }
}
