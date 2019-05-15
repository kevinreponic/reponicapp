import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet} from 'react-native'
import { Button, Input } from "react-native-elements";
import Icon  from "react-native-vector-icons/FontAwesome";
import { validate } from '@babel/types';
export class LoginForm extends Component {

  constructor(){
    super()
    this.state= {
      email : '',
      password : '',
      emailError : '',
      passwordError : ''
    }
  }

  validate(){
   this.setState({emailError : '', passwordError : ''})
  if(this.state.email == '' || this.state.password == ''){
    if(this.state.email == ''){
     this.setState({emailError : 'Please fill in all fields'})
   }

   if(this.state.password == ''){
     this.setState({passwordError : 'Please fill in all fields'})
   }
  }

  else{
    if(!this.validateEmail(this.state.email)){
      this.setState({emailError : 'Please enter a valid email address'})
    }
  }
  
  }

  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <View style={styles.container}>
        <Input inputContainerStyle={styles.inputBox} inputStyle={styles.inputText} errorStyle={{color : 'red'}} errorMessage={this.state.emailError}
        placeholder="Email" placeholderTextColor="#ffffff"
        onChangeText={email=> this.setState({email})} />
        <Input inputContainerStyle={styles.inputBox} inputStyle= {styles.inputText} errorStyle={{color : 'red'}} errorMessage={this.state.passwordError} 
        placeholder="Password" placeholderTextColor="#ffffff" secureTextEntry={true}
        onChangeText={password=> this.setState({password})} />
        <Button containerStyle={{marginVertical: 10}} buttonStyle={styles.loginBtn} titleStyle={{fontSize : 20}} 
        title="Login" type="outline" raised={true} onPress={()=> this.validate()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
container : {
    justifyContent : 'center',
    alignItems : 'center'
},

inputBox : {
    width : 300,
    backgroundColor : 'rgba(255,255,255,0.3)',
    borderRadius : 20,
    paddingHorizontal : 16,
    marginVertical : 10
},

inputText : {
  fontSize : 16,
  color : '#ffffff',
},

loginBtn : {
width : 200,
borderRadius : 20
}
})

export default LoginForm
