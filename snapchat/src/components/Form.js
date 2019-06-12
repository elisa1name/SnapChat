import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class Logo extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "grey"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "grey"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    alignItems: 'center'
  },

  inputBox: {
    alignSelf: 'stretch',
    marginTop: 40,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    width: 200,
    height: 40,
    backgroundColor: 'white',
    marginTop: 50,
  },
  buttonText: {
  fontSize: 20,
   color: 'black',
   marginLeft: 80,
   paddingTop: 5 
  }
  
});