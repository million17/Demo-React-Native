import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    Alert,
    Platform,
    TouchableHighlight,
} from 'react-native';
import { horizontalFlatListData } from '../../data/horizontalFlatListData'
import Icon from 'react-native-vector-icons/Ionicons'
class HorizontalFlatListItem {
    render() {
        return (
            <View style={styles.horizontalFlatListItem}>
                <Text>{this.props.item.hour}</Text>
                <Icon
                    name={this.props.item.status.android}
                    size={30}
                    color='white'></Icon>
                <Text>{this.props.item.degress} F</Text>
            </View>
        )
    }
}
export default class HorizontalFlatList extends Component {
    render() {
        return (
            <View style={styles.containerHorizontal}>
                <View style={styles.main}>
                    <FlatList style={styles.mainHeader}
                        horizontal={true}
                        data={horizontalFlatListData}
                        keyExtractor={(item, index) => item.hour}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                                    {' '}
                                </HorizontalFlatListItem>
                            );
                        }}></FlatList>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerHorizontal: {
        flexDirection: 'column',
        flex: 1
    },
    main: {
        height: 150
    },
    mainHeader: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    horizontalFlatListItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        margin: 5,
        borderColor: 'gray'
    }
});