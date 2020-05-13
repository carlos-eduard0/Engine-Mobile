import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './src/screens/Login';
import Routes from './routes';
import LoadingScreen from './src/screens/Loading';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return(
      <>
      <AppNavigator />
      </>
    ) 
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  Routes: Routes
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
