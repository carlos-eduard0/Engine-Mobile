import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as Font from 'expo-font';
import LoginScreen from './src/screens/Login';
import Routes from './routes';
import LoadingScreen from './src/screens/Loading';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  state = {
    assetsLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Baloo Thambi 2 Bold': require('./assets/fonts/BalooThambi2Bold.ttf')
    });
    this.setState({ assetsLoaded: true });
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#ffff"></StatusBar>
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
