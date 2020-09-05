import React from 'react';

import {ActivityIndicator, View, Text, StyleSheet} from 'react-native';

import * as firebase from 'firebase';
import {useEffect} from 'react';

const Loading = ({navigation}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'App' : 'Auth');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator></ActivityIndicator>
    </View>
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
