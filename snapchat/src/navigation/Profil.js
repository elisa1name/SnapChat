import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
//import { StackNavigator } from "react-navigation";


export default class Profil extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "black",
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return <Text>OLA</Text>;
  }
}

const styles = StyleSheet.create({});

AppRegistry.signupComponent("Profil", () => Profil);