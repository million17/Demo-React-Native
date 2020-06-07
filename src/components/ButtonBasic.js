import React, { Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Button from 'react-native-button'

export default class ButtonBasic extends Component {
    _onPressButton() {
        alert('This button alert !');
    }
    render() {
        return (
            <View style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={this._onPressButton}>
                <Button>Button Basic</Button>
            </View>
        )
    }
}

