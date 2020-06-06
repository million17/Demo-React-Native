import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Platform, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class App extends Component {
  render() {

    const Stack = createStackNavigator();

    function MyProfile() {
      return (
        <View>My Profile</View>
      );
    }
    function HomeScreen(navigation) {
      return (
        <Button
          title="Go to Profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane ' })}
        />
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
