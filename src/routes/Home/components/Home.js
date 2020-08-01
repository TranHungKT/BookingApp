import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MapContainer } from "./MapComponent";

import { Container } from "native-base";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("Lat", this.props.region.coords.longitude);
  }

  render() {
    const tempregion = {
      latitude: this.props.region.coords.latitude,
      longitude: this.props.region.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return (
      <Container>
        <MapContainer region={tempregion} />
      </Container>
    );
  }
}
