import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Form from '../components/Form';
import axios from 'axios';

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           email: '',
           password: ''
           
        };
    }

    signup() {
        Actions.signup()
    }
 
    render() {
        return(
                <View style={styles.container}>
                  <TextInput  style={styles.TextInput} value={this.state.email} onChangeText={text => this.setState({email: text})}  placeholder="email" />
            <TextInput style={styles.TextInput} value={this.state.password} onChangeText={text => this.setState({password: text})}  placeholder="password" />
            <TouchableOpacity
            style = {styles.buttonLogin}
            onPress={this._loginAsync} >
             <Text  style = {styles.Login}>Login</Text>
            </TouchableOpacity>
                <Form type="Login"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
    _loginAsync = () => {
       
        var data = {
           email: this.state.email,
           password: this.state.password
        }
        const headers = {
            'Content-Type': 'application/json',
          }
        axios.post('https://snapchat.improve-code.net/connection', data,{headers : headers})
        .then(async response => {
            console.log(response.data.data.email);
            alert('Bien connecté');
        })
        .catch(error => {
            console.log(error);
            alert("Email et le mot de passse n'existe pas!");
        })
    };
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#12799f', 
      fontSize:16,
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500',
    }
});