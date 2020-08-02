import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { InputGroup, Input } from "native-base";
export const SearchBox = () => {
  return (
    <View style={styles.searchBox}>
      <Text style={styles.label}>PICK UP</Text>
      <InputGroup>
        <Icon name="search" size={15} color="red" />
        <Input
          style={styles.inputSearch}
          placeholder="Choose pick-up location"
        />
      </InputGroup>
      <Text style={styles.label}>DROP OFF</Text>
      <InputGroup>
        <Icon name="search" size={15} color="red" />
        <Input
          style={styles.inputSearch}
          placeholder="Choose pick-up location"
        />
      </InputGroup>
    </View>
  );
};

export default SearchBox;
