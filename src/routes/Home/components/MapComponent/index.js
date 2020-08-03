import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";

import SearchBox from "../SearchBox";
import SearchResult from "../SearchResult";
import { toggleSearchResultModal } from "../../modules/actions";
export const MapContainer = ({
  region,
  getInputData,
  toggleSearchResultModal,
}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
        <MapView.Marker pinColor="red" coordinate={region} />
      </MapView>
      <SearchBox
        getInputData={getInputData}
        toggleSearchResultModal={toggleSearchResultModal}
      />
      {/* <SearchResult /> */}
    </View>
  );
};

export default MapContainer;
