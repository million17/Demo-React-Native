import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Alert,
  TouchableHighlight,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
// import AddModal from './AddModal';
// import EditModal from './EditModal';

import {getAllListProduct} from '../../networking/Server';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 0,
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
            const deletingRow = this.state.activeRowKey;
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
                    // flatListData.splice(this.props.index, 1);
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                    this.props.parentFlatList.refreshDataFromServe();
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
        {
          onPress: () => {
            // this.props.parentFlatList.refs.editModal.showEditModal(
            //   flatListData[this.props.index],
            //   this,
            // );
          },
          text: 'Edit',
          type: 'primary',
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
              source={{uri: 'http://10.1.34.224' + this.props.item.mainImage}}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={styles.textFlatList}>
                {this.props.item.productName}
              </Text>
              <Text style={styles.textFlatList}>
                {this.props.item.shortDesc}
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
      productsFromServer: [],
    };
    this._onPressAdd = this._onPressAdd.bind(this);
  }

  componentDidMount() {
    this.refreshDataFromServer();
  }
  refreshDataFromServer = () => {
    getAllListProduct()
      .then(products => {
        this.setState({productsFromServer: products});
        console.log(`Is data : success ${products} !`);
      })
      .catch(error => {
        this.setState({productsFromServer: []});
        console.log('SADASDAS');
      });
  };

  refreshFlatList = activeKey => {
    this.setState(prevState => {
      return {
        deleteRowKey: activeKey,
      };
    });
    this.refs.flatList.scrollToEnd({duration: 500});
  };
  _onPressAdd = () => {
    // this.refs.addModal.showAddModal();
    alert('This show alert modal');
  };
  render() {
    return (
      <View style={{flexDirection: 'column', marginBottom: 100}}>
        <View style={styles.viewTopPage}>
          <TouchableHighlight
            style={{marginRight: 10}}
            underlayColor="tomato"
            onPress={this._onPressAdd}>
            <Image
              style={{width: 35, height: 35}}
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
              }}
            />
          </TouchableHighlight>
        </View>
        <FlatList
          ref={'flatList'}
          //   data={flatListData}
          data={this.state.productsFromServer}
          renderItem={({item, index}) => {
            // console.log(`Item : = ${JSON.stringify(item)} , index = ${index}`);
            return (
              <FlatListItem item={item} index={index} parentFlatList={this}>
                {' '}
              </FlatListItem>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
        {/* <AddModal ref={'addModal'} parentFlatList={this} />

        <EditModal ref={'editModal'} parentFlatList={this} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textFlatList: {
    color: 'black',
    padding: 10,
    fontSize: 16,
  },
  viewTopPage: {
    backgroundColor: 'tomato',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
