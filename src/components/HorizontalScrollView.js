import React, {Component} from 'react';
import {
  Text,
  Alert,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class HorizontalScrollView extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        onMomentumScrollEnd={() => {
          Alert.alert('On Momentum Scroll Begin !');
        }}
        onPage={envent => {
          console.log(`offset = ${envent.nativeEvent.offset}`);
        }}>
        <View style={styles.screen}>
          <Text>Screen 1</Text>
        </View>
        <View style={[styles.screen, styles.backgroundColorRed]}>
          <Text>Screen 2</Text>
        </View>
        <View style={[styles.screen, styles.backgroundColorYellow]}>
          <Text>Screen 3</Text>
        </View>
      </ScrollView>
    );
  }
}
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d5d5d5',
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundColorRed: {
    backgroundColor: 'red',
  },
  backgroundColorYellow: {
    backgroundColor: 'yellow',
  },
});
