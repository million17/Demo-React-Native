import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import flatListData from '../../data/flatListData';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window').width;

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFoodName: '',
      newFoodDescription: '',
    };
  }
  showAddModal = () => {
    this.refs.myModal.open();
  };
  generateKey = numberOfCharaters => {
    return require('random-string')({length: numberOfCharaters});
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
        <Text style={styles.textTitle}>New Food</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Input Food Name !"
          onChangeText={text => this.setState({newFoodName: text})}
          value={this.state.newFoodName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Input Short Description !"
          value={this.state.newFoodDescription}
          onChangeText={text => this.setState({newFoodDescription: text})}
        />
        <Button
          style={styles.textButton}
          title="Save"
          containerStyle={styles.buttonModal}
          onPress={() => {
            if (
              this.state.newFoodDescription.length == 0 ||
              this.state.newFoodName == 0
            ) {
              Alert.alert('You must enter foods name and short description ');
              return;
            }
            const newKey = this.generateKey(24);
            const newFood = {
              key: newKey,
              name: this.state.newFoodName,
              foodDescription: this.state.newFoodDescription,
              imageSrc:
                'https://www.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png',
            };
            flatListData.push(newFood);
            this.props.parentFlatList.refreshFlatList(newKey);
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
    height: 200,
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
