import React, {Component} from 'react';
import {Text, View, Platform, SectionList} from 'react-native';

import sectionListData from '../../data/sectionListData';

class SectionListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>{this.props.item.name}</Text>
        <Text>{this.props.item.description}</Text>
      </View>
    );
  }
}

export default class SectionListBasic extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <SectionList
          renderItem={(item, index) => {
            return <SectionListItem item={item} index={index} />;
          }}
          sections={sectionListData}
          keyExtractor={(item, index) => item.name}
        />
      </View>
    );
  }
}
