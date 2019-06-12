import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logosna extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width: 170, height: 170}}
          			source={require('../images/snapcode.png')}/>
          		<Text style={styles.logoText}>Enregistre toi vite !</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
		alignItems: 'center',
		backgroundColor:  '#fffc00',
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:18,
  	backgroundColor:  '#fffc00',
  }
});