/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { LoginScreen } from "./pages/Login";
import { HomeScreen } from "./pages/Home";
import {SignUpScreen} from './pages/SignUp'

const AppNavigator =  createStackNavigator({
  Login : LoginScreen,
  SignUp : SignUpScreen,
  Home : HomeScreen
},
{
  initialRouteName : "Login",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render(){
    return <AppContainer />
  }
}