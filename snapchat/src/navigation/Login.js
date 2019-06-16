import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput,
  AppRegistry,
  KeyboardAvoidingView,
  AsyncStorage,
  Image,
} from 'react-native';

import Logo from '../components/Logo';



import {Actions} from 'react-native-router-flux';
import { StackNavigator } from "react-navigation";

export default class Login extends Component {

	signup() {
		Actions.signup()
  };
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      token: null
    }
  }
  static navigationOptions = {
    headerStyle: {
      elevation: null
    },
    header: null
  };
  

  async onRegisterPress() {
    const { email, password,  } = this.state;
    console.log(email);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Profil");
  }


  data() {
    var body = {
      Password: this.state.Password,
      Email: this.state.Email,
    }

    axios({
        method: 'post',
        url: '/https://snapchat.improve-code.net/connection',
        data: body
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
  }


	render() {

    let {Email} = this.state;
    let {Password} = this.state;
    
		return(
			<View style={styles.container}>
				<Logo />
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
             <Text onPress={() => this.props.navigation.navigate("Profil")}
            title="Profil"style={styles.buttonText}>{this.props.type}Login</Text>
           </TouchableOpacity> 
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet ?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:  '#fffc00',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
  	flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
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

