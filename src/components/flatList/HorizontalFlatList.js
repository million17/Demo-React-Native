import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Platform, Image} from 'react-native';
import {horizontalFlatListData} from '../../data/horizontalFlatListData';
import {horizontalFlatListStatus} from '../../data/horizontalFlatListData';
import Icon from 'react-native-vector-icons/Ionicons';
class HorizontalFlatListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.horizontalFlatListItem}>
        <Text style={styles.textItem}>{this.props.item.hour}</Text>
        <Icon
          name={
            Platform.OS === 'ios'
              ? this.props.item.status.ios
              : this.props.item.status.android
          }
          size={30}
          color="white"
        />
        <Text style={styles.textItem}>{this.props.item.degress} F</Text>
      </View>
    );
  }
}
export default class HorizontalFlatList extends Component {
  render() {
    return (
      <View style={styles.containerHorizontal}>
        <Text style={styles.textTitle}>Weather</Text>
        <View style={styles.backgroundAbosolute}>
          <Image
            style={styles.imageBackground}
            source={require('../../images/backgroundScrollView.jpg')}
          />
        </View>
        <View style={styles.main}>
          <FlatList
            style={styles.mainHeader}
            horizontal={true}
            data={horizontalFlatListData}
            keyExtractor={(item, index) => item.hour}
            renderItem={({item, index}) => {
              console.log(`Item : = ${JSON.stringify(item)}`);
              return (
                <HorizontalFlatListItem
                  item={item}
                  index={index}
                  parentFlatList={this}>
                  {' '}
                </HorizontalFlatListItem>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHorizontal: {
    flexDirection: 'column',
    flex: 1,
  },
  main: {
    height: 170,
  },
  mainHeader: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
  horizontalFlatListItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    borderColor: 'gray',
  },
  textItem: {
    color: 'white',
    fontSize: 17,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
  backgroundAbosolute: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  },
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
    height: null,
    width: null,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
