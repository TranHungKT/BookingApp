import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <View>
        <Text> Hello {this.props.name} </Text>
        
      </View>
    );
  }
}
