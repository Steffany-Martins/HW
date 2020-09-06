import React from 'react';

import {View, Text, StyleSheet, LayoutAnimation, StatusBar} from 'react-native';
import firebase from 'firebase';
import {HeaderBackground} from 'react-navigation-stack';

import {useEffect} from 'react';
import IconLogo from '../../assets/logo-conectadas.svg';
const Loading = ({navigation}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'App' : 'Auth');
    });
  }, []);

  LayoutAnimation.easeInEaseOut();
  return (
    <HeaderBackground style={{top: 0, left: 0, backgroundColor: '#232954'}}>
      <StatusBar barStyle="light-content" backgroundColor="#232954" />
      <View style={styles.container}>
        <IconLogo width={400} height={400} />
        <Text style={{color: '#fff', textTransform: 'uppercase'}}>
          Loading...
        </Text>
      </View>
    </HeaderBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
