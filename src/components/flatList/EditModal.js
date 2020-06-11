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

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      foodDescription: '',
    };
  }
  showEditModal = (editingFood, flatListItem) => {
    console.log(`editing food = ${JSON.stringify(editingFood)}`);
    this.setState({
      key: editingFood.key,
      foodName: editingFood.name,
      foodDescription: editingFood.foodDescription,
      flatListItem: flatListItem,
    });
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
        <Text style={styles.textTitle}>Edit Food</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Input Food Name !"
          onChangeText={text => this.setState({foodName: text})}
          value={this.state.foodName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Input Short Description !"
          value={this.state.foodDescription}
          onChangeText={text => this.setState({foodDescription: text})}
        />
        <Button
          style={styles.textButton}
          title="Save"
          containerStyle={styles.buttonModal}
          onPress={() => {
            if (
              this.state.foodDescription.length == 0 ||
              this.state.foodDescription == 0
            ) {
              Alert.alert('You must enter foods name and short description ');
              return;
            }
            var foodIndex = flatListData.findIndex(
              item => this.state.key == item.key,
            );
            if (foodIndex < 0) {
              return;
            }
            flatListData[foodIndex].name = this.state.foodName;
            flatListData[
              foodIndex
            ].foodDescription = this.state.foodDescription;
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
