import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logosna extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={styles.image}
          			source={require('../images/snapcode.png')}/>
          		<Text style={styles.logoText}>register quickly !</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
   
    justifyContent:'flex-end',
		alignItems: 'center',
		backgroundColor:  '#fffc00',
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
		backgroundColor:  '#fffc00',
	},
	image: {
	width: 220,
	height: 220,
	marginTop: 150
	}
});