import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class FlatListBasic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Flat List Basic </Text>
                <FlatList
                    data={[
                        { key: 'Triệu' },
                        { key: 'Trang' },
                        { key: 'Minh' },
                        { key: 'Hà' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}> {item.key} </Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    item: {
        padding: 10,
        height: 20,
        fontSize: 24,
        color : 'red'
    }
});
