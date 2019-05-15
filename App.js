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

const AppNavigator =  createStackNavigator({
  Login : LoginScreen,
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