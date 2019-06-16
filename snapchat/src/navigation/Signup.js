import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Logo from '../components/Logo';
import Logosna from '../components/Logosna';



import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
  goBack() {
    Actions.pop();
  }
    
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: ''
    }
  }

  data() {
    var body = {
      Password: this.state.Password,
      Email: this.state.Email
    }

      axios({
        method: 'post',
        url: '/https://snapchat.improve-code.net/inscription',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    //{ console.log(' hello je suis la fonction data') }
  }



	render() {
    
    let {Email} = this.state;
    let {Password} = this.state;

		return(
			<View style={styles.container}>
      <Logosna />
      <View style={styles.container}>
      <TextInput  
        style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Email"
        placeholderTextColor = "grey"
        selectionColor="#fff"
        keyboardType="email-address"
        onChangeText={(Email) => this.setState({Email})}
        value={this.state.Email}
      />
     <TextInput  
        style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' 
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor = "grey"
        onChangeText={(Password) => this.setState({Password})}
        value={this.state.Password}
      />
       <TouchableOpacity style={styles.button}>
             <Text onPress={this.data} style={styles.buttonText}>{this.props.type}Register</Text>
           </TouchableOpacity> 
          
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>already registered ?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Login</Text></TouchableOpacity>
      	</View>
			</View>	
      </View>
			)
  }
}



const styles = StyleSheet.create({
  container : {
    backgroundColor:  '#fffc00',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row',
    color:  'black'
  },
  signupText: {
  	color:'black',
    fontSize:16,
    marginBottom: 100
  },
  signupButton: {
  	color:'black',
  	fontSize:16,
    fontWeight:'500',
    marginBottom: 100
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
    backgroundColor: 'white',
    marginTop: 50,
  },
  buttonText: {
  fontSize: 20,
   color: 'black',
   marginLeft: 70,
   paddingTop: 5,
   marginTop: 10 
  }
});
