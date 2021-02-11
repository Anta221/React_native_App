import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  SectionList,
  Text
} from "react-native";
import Constants from "expo-constants";

export default function DetailsRow ({}){
    
    return(
        <Text>DetailsScreen</Text>
    )

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

  