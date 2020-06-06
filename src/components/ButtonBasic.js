import React, { Component } from 'react'
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class ButtonBasic extends Component {
    _onPressButton() {
        alert('This button alert !');
    }
    render() {
        return (
            <View>
                <Text>Button Basic</Text>
                <Button onPress={this._onPressButton} title="Press Me ! "></Button>
                <TouchableOpacity onPress={this._onPressButton} title="Touchable Opacity !" >
                    <Text style={styles.buttonTouchable}>Touchable Opacity</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonTouchable: {
        height: 40,
        backgroundColor: 'blue',
        textAlign: 'center',
    }
});
