import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from "axios";

export default class Form extends Component {
    constructor(props){        
      super(props);        
      this.state={            
         email:'',
         password: ''        
      }   
 }


render() {
    return(
        <View style={styles.container}>
      
        </View>
        
    )
}

}
const styles = StyleSheet.create({
container: {
    justifyContent: 'center',
    alignItems: 'center',
},
inputBox: {
    alignSelf: 'stretch',
    marginTop: 40,
    marginBottom: 10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
},
button: {
    alignSelf: 'stretch',
    width: 200,
    height: 50,
    marginLeft: 50,
    backgroundColor: 'white',
    marginTop: 50,
},
buttonText: {
    fontSize: 20,
   color: 'black',
   marginLeft: 80,
   paddingTop: 5,
   marginTop: 10 
}
});