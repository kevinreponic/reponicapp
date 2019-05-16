import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from "react-native-elements";
import { auth } from "react-native-firebase";

export class HomeScreen extends Component {

  static navigationOptions = {
    title : 'Home',
    headerStyle : {
      backgroundColor : '#42a5f5'
    },
    headerTintColor : '#fff',
    headerTitleStyle : {
      fontWeight : 'bold'
    }
  }

  onLogout(){
    auth().signOut()
  }
  
  render() {
    return (
      <View style={{flex :1,justifyContent : 'center', alignItems : 'center'}}>
        <Button title='Logout' buttonStyle={{width: 200, borderRadius : 20}} onPress={()=> this.onLogout()} />
      </View>
        
    )
  }
}

export default HomeScreen
