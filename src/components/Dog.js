import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

export default class Dog extends Component {
    state = { isHungry: true };
    render(props) {
        return (
            <View>
                <Text>
                    I am 
                        {this.props.name}
                    , and I am 
                        {
                            this.state.isHungry 
                            ? "Hungry" 
                            : "Full"
                        }
                </Text>

                <Button 
                    onPress={() => {
                        this.setState({ isHungry: false });
                    }}
                    disabled={!this.state.isHungry}
                    title={
                        this.state.isHungry 
                        ? "Pour me some think milk, please !" 
                        : "Thanks You `!"
                    }
                />

                <TextInput 
                    style= {{
                        borderColor : 'red',
                        width : 100,
                        height : 40
                    }}
                    placeholder="Type to input text !"
                />
            </View>
        )
    }
}
