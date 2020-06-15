import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    Alert,
    Dimensions,
    TextInput,
    Button,
} from 'react-native';
import { createProduct } from '../networking/Server';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window').width;

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            shortDesc: '',
            mainImage: '',
            categoryId: 2,
            price: '',
            brand: '',
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    };
    generateKey = numberOfCharaters => {
        return require('random-string')({ length: numberOfCharaters });
    };
    render() {
        return (
            <Modal
                style={styles.containerModal}
                ref={'myModal'}
                position="center"
                backdrop={true}
                onClosed={() => {
                    //   alert('close modal !');
                }}>
                <Text style={styles.textTitle}>New Product</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Input Product Name !"
                    onChangeText={text => this.setState({ productName: text })}
                    value={this.state.productName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Input Short Description !"
                    value={this.state.shortDesc}
                    onChangeText={text => this.setState({ shortDesc: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Input Price !"
                    value={this.state.price}
                    onChangeText={text => this.setState({ price: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Input Brand !"
                    value={this.state.brand}
                    onChangeText={text => this.setState({ brand: text })}
                />
                <Button
                    style={styles.textButton}
                    title="Save"
                    containerStyle={styles.buttonModal}
                    onPress={() => {
                        if (
                            this.state.shortDesc.length == 0 ||
                            this.state.productName == 0 ||
                            this.state.brand == 0 ||
                            this.state.price == 0
                        ) {
                            Alert.alert('You must enter Product requid !');
                            return;
                        }
                        const newProduct = {
                            name: this.state.productName,
                            shortDesc: this.state.shortDesc,
                            mainImage: '/link/no_image.jpg',
                            brand: this.state.brand,
                            price: this.state.price,
                            categoryId: 1,
                        };
                        console.log(`New Product : ` + newProduct);
                        createProduct(newProduct).then(message => {
                            console.log(`Message : ` + message);
                            if (message === 'ok') {
                                console.log(success);
                                this.props.parentFlatList.refreshDataFromServer();
                            }
                        });
                        this.refs.myModal.close();
                    }}>
                    Save
        </Button>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    containerModal: {
        justifyContent: 'center',
        borderRadius: 10,
        shadowRadius: 10,
        width: screen - 50,
        height: 'auto',
        padding: 20,
    },
    textButton: {
        fontSize: 20,
        color: 'white',
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInput: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonModal: {
        backgroundColor: 'mediumseagreen',
        padding: 8,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 7,
    },
});