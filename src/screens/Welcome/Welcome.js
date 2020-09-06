import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {HeaderBackground} from 'react-navigation-stack';

import IconLogo from '../../assets/logo-conectadas.svg';

const Welcome = ({navigation}) => {
  LayoutAnimation.easeInEaseOut();

  return (
    <HeaderBackground style={{top: 0, left: 0, backgroundColor: '#232954'}}>
      <StatusBar barStyle="light-content" backgroundColor="#232954" />
      <View style={styles.container}>
        <IconLogo width={400} height={400} />
        <Text style={styles.title}>Bem-Vinda</Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}>
            <Text style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.buttonText}>Pular</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    fontFamily: 'Roboto',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: 30,
    bottom: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',

    paddingTop: 13,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  button: {
    textTransform: 'uppercase',
    borderRadius: 30,
    backgroundColor: '#FF80B5',
    marginTop: 15,
    minWidth: 200,
    textAlign: 'center',
    minHeight: 50,
    alignItems: 'center',
    fontWeight: '500',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default Welcome;
