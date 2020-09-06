import React from 'react';
import {StatusBar} from 'react-native';
// Screen
import Login from './src/screens/Login/Login';
import Loading from './src/screens/Loading/Loading';
import Register from './src/screens/Register/Register';
import Home from './src/screens/Home/Home';
import Welcome from './src/screens/Welcome/Welcome';
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
<StatusBar barStyle="default" />;
const AppStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Welcome: Welcome,
    Login: Login,
    Register: Register,
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
