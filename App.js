import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Platform, StyleSheet } from 'react-native';
import Dog from './src/components/Dog';
import FlatListBasic from './src/components/FlatListBasic';
import ButtonBasic from './src/components/ButtonBasic';
export default class App extends Component {
  render() {
    function getName(firstName, lastName, fullName) {
      return "\nTên Họ :" + firstName + "\nTên :" + lastName + "\nTên Đầy Đủ :" + fullName;
    }

    function CatName(props) {
      return (
        <View>
          <Text>This is a {props.name}</Text>
        </View>
      );
    }

    function CatImage() {
      return (
        <View style={{ margin: 10 }}>
          <Image source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
            style={{
              height: 100,
              width: 100,
            }}></Image>
        </View>
      );
    }


    const name = "Ngo Quang Trieu";
    return (
      <NavigationContainer style={styles.container}>
        <Text style={{ color: Platform.OS === 'ios' ? 'red' : 'blue' }}>Hello , {name}</Text>
        <Text>Function , {getName("Ngô Quang", "Triệu", "Ngô Quang Triệu")}</Text>
        <Dog name="Poodle" />
        <Dog name="Pug" />
        <CatImage />
        <CatName name="Mèo ta"></CatName>
        <Text>FlatList</Text>
        <FlatListBasic />
        <ButtonBasic />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10
  }

});