import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {setName} from '../modules/actions';
import Home from '../components/Home';
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loadName = () => {
    this.props.setName();
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Home name={this.props.home.name} />
        <TouchableOpacity
          onPress={this.loadName}
          style={{flex: 0.5, justifyContent: 'center'}}>
          <Text>Press me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home,
});

const mapActionToProps = {
  setName,
};

export default connect(
  mapStateToProps,
  mapActionToProps,
)(HomeContainer);
