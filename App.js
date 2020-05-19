import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Styles} from './src/common';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLeftOne}>
          <Text style={styles.parent}>
            Title :<Text style={styles.children}>This is a React Native</Text>
          </Text>
          <Text numberOfLines={1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    fontWeight: 'bold',
    color: 'red',
  },
  children: {
    fontSize: 20,
    color: 'blue',
    fontFamily: 'Tahoma',
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: 2,
  },
  top: {
    flexDirection: 'row',
    flex: 6,
  },
  topLeft: {
    flex: 3,
    backgroundColor: 'white',
  },
  topLeftTwo: {
    flex: 5,
    borderBottomColor: 'green',
    borderWidth: 1,
    flexDirection: 'column',
  },
  topRight: {
    flex: 6,
    backgroundColor: 'red',
  },

  bottom: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },

  bottomOne: {
    flex: 1,
    backgroundColor: 'green',
  },
  bottomTow: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  bottomThree: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomThreeTop: {
    flex: 1,
    backgroundColor: 'white',
  },

  bottomThreeBottom: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
