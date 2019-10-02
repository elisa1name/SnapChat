import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';
 import axios from 'axios';
 
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
           email: '',
           password: '', 
        };
    }
    goBack() {
        Actions.pop()
    }
 
    render() {
        return(
            <View style={styles.container}>
                  <TextInput  style={styles.TextInput} value={this.state.email} onChangeText={text => this.setState({email: text})}  placeholder="email" />
            <TextInput style={styles.TextInput} value={this.state.password} onChangeText={text => this.setState({password: text})} secureTextEntry={true}  placeholder="password" />
            <TouchableOpacity
            style = {styles.buttonLogin}
            onPress={this._registerAsync} >
             <Text  style = {styles.Login}>Signup</Text>
             </TouchableOpacity>
                <Form type="Signup"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
    _registerAsync = () => {
        axios.post('https://snapchat.improve-code.net/inscription', this.state)
        .then(async response => {
            console.log(response.data.data.email); 
            alert('Bien enregistré');
            })
            .catch(error => {
                console.log(error.response.data);
                alert("deja enregistré");
            })
        };
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signupText: {
      color: '#12799f', 
      fontSize:16
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500'
    }
});