import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MapContainer } from "./MapComponent";

import { Container } from "native-base";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
const taxiLogo = require("../../../assets/taxi_logo_white.png");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getCurrentLocation();
  }
  render() {
    // const tempregion = {
    //   latitude: 37.785834,
    //   longitude: -122.406417,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // };

    return (
      <Container>
        <HeaderComponent logo={taxiLogo} />
        {this.props.region.latitude && (
          <MapContainer
            region={this.props.region}
            getInputData={this.props.getInputData}
            toggleSearchResultModal={this.props.toggleSearchResultModal}
          />
        )}
        <FooterComponent /> 
      </Container>
    );
  }
}
