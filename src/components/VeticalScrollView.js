import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class VeticalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView keyboardDismissMode="on-drag">
        <Image
          source={require('../images/backgroundScrollView.jpg')}
          style={{
            width: screenWidth,
            height: (screenWidth * 332) / 590,
          }}
        />
        <Text style={styles.textStyles}>This is a text</Text>
        <TextInput
          style={styles.textInput}
          placeholder="This is a input text "
        />
        <Image
          source={require('../images/backgroundScrollView.jpg')}
          style={{
            width: screenWidth,
            height: (screenWidth * 332) / 590,
          }}
        />
        <Image
          source={require('../images/backgroundScrollView.jpg')}
          style={{
            width: screenWidth,
            height: (screenWidth * 332) / 590,
          }}
        />
        <Image
          source={require('../images/backgroundScrollView.jpg')}
          style={{
            width: screenWidth,
            height: (screenWidth * 332) / 590,
          }}
        />
        <Image
          source={require('../images/backgroundScrollView.jpg')}
          style={{
            width: screenWidth,
            height: (screenWidth * 332) / 590,
          }}
        />
        <Image
          source={require('../images/backgroundScrollView.jpg')}
          style={{
            width: screenWidth,
            height: (screenWidth * 332) / 590,
          }}
        />
        <Image
          source={require('../images/backgroundScrollView.jpg')}
          style={{
            width: screenWidth,
            height: (screenWidth * 332) / 590,
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'yellow',
  },
  textInput: {
    margin: 10,
    padding: 10,
    borderColor: 'red',
    borderRadius: 20,
    borderWidth: 1,
  },
});
