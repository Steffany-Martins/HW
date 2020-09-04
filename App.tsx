import React from 'react';
import {Text, View} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello!</Text>
    </View>
  );
};
export default HelloWorldApp;
