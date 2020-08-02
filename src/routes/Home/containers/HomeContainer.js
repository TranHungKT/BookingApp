import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setName, getCurrentLocation } from "../modules/actions";
import Home from "../components/Home";

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
)(Home);
