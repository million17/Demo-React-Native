import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';
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
        <View style={styles.commonMargin} />
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor="red"
          onShowUnderlay={() => {
            alert('This is show underlay !');
          }}>
          <View>
            <Image
              style={{height: 40, width: 100}}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/proxy/yBTQjOT9TEnHrIYIg9xZhxqe8xkNPMT8GbocsBtEr-YI-FyCnEvRkf3hNOQP4PlEwHp6oi9cHoW8jaqR2ApZVfzkyObuLqaHSrpEJWV52kgjp94-W4jMxvNGepH21pXHV5GwDA37EAWOmt7_',
              }}
            />
          </View>
        </TouchableHighlight>
        <View style={styles.commonMargin} />
        <TouchableNativeFeedback
          style={styles.buttonCommon}
          onPress={this._onPressButton}
          useForeground={false}>
          <View style={styles.buttonBasic}>
            <Text>Touchable Native Feedback</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.commonMargin} />
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.buttonBasic}>
            <Text>Touchable Opacity</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonCommon: {
    width: 200,
    height: 40,
  },
  buttonBasic: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
  commonMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
});
