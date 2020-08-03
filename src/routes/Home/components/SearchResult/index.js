import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { List, ListItem, Left } from "native-base";

export const SearchResult = () => {
  return (
    <View style={styles.searchResultsWrapper}>
      <List>
        <ListItem button avatar>
          <Left style={styles.leftContainer}>
            <Icon style={styles.leftIcon} name="location-on" />
          </Left>
          <Text>List 1</Text>
        </ListItem>
        <ListItem>
          <Text>List 2</Text>
        </ListItem>
      </List>
    </View>
  );
};

export default SearchResult;
