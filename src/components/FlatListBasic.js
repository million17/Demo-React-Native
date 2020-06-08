import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image, Alert} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
  }
  render() {
    const swipeSetting = {
      autoClose: true,
      onOpen: (secId, rowId, derection) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      onClose: (secId, rowId, derection) => {
        this.setState({activeRowKey: null});
      },
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel Pressed '),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSetting}>
        <View
          style={{
            flex: 1,
            //   backgroundColor: this.props.index % 2 == 0 ? 'red' : 'yellow',
            backgroundColor: 'green',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 4,
            }}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: this.props.item.imageSrc}}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={styles.textFlatList}>{this.props.item.name}</Text>
              <Text style={styles.textFlatList}>
                {this.props.item.foodDescription}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'white',
            }}
          />
        </View>
      </Swipeout>
    );
  }
}
export default class FlatListBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey: null,
    };
  }
  refreshFlatList = deleteKey => {
    this.setState((prevState));
  };
  render() {
    return (
      <View>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            // console.log(`Item : = ${JSON.stringify(item)} , index = ${index}`);
            return (
              <FlatListItem item={item} index={index}>
                {' '}
              </FlatListItem>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textFlatList: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
});
