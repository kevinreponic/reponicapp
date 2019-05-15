import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';

export class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Reponic </Text>
        <Button title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#4286f4'
  },

  welcome : {
    fontSize : 30,
    textAlign : 'center',
    margin : 10,
    color : '#ffffff'
  },
})

export default LoginScreen
