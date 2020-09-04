import React from 'react';
import {Text, View} from 'react-native';
//Screen
import LoginScreen from './src/screens/Login/LoginScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import LoadingScreen from './src/screens/Loading/LoadingScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCvGi7X47WhaRq1DYn8uIE_KOFZbEdilU8',
  authDomain: 'first-app-91982.firebaseapp.com',
  databaseURL: 'https://first-app-91982.firebaseio.com',
  projectId: 'first-app-91982',
  storageBucket: 'first-app-91982.appspot.com',
  messagingSenderId: '599523912208',
  appId: '1:599523912208:web:0e7c10ac43bcacb3247895',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
