import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width: 200, height: 200}}
          			source={require('../images/snapchat.png')}/>
          		<Text style={styles.logoText}>Welcome My Snapchat</Text>	
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