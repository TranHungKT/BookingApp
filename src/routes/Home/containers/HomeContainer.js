import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setName, getCurrentLocation } from "../modules/actions";
import Home from "../components/Home";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getCurrentLocation();
  }
  loadName = () => {
    this.props.setName();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home region={this.props.home.region} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  home: state.home,
});

const mapActionToProps = {
  setName,
  getCurrentLocation,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(HomeContainer);
