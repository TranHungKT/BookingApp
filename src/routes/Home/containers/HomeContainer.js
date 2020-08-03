import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  setName,
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
} from "../modules/actions";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
  region: state.home.region,
  inputData: state.home.inputData || {},
  resultTypes: state.home.resultTypes || {},
});

const mapActionToProps = {
  setName,
  getCurrentLocation,
  getInputData,
  toggleSearchResultModal,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Home);
