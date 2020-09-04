import React from 'react';
import {View, Text, StyleSheet, LayoutAnimation} from 'react-native';

const Register = () => {
  LayoutAnimation.easeInEaseOut();

  return (
    <View style={styles.container}>
      <Text>Register</Text>
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

export default Register;
