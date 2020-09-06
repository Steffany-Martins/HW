import React, {useState, useRef} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Imagem from '../../assets/logo-conectadas.svg';
import {HeaderBackground} from 'react-navigation-stack';

const Home = ({navigation}) => {
    return (

        <HeaderBackground style={
            {backgroundColor: '#232954'}
        }>

            <View style={
                styles.image
            }></View>

            <TouchableOpacity style={
                    styles.button
                }
                onPress={
                    () => navigation.navigate('Login')
            }>
                <Text style={
                    styles.buttonText
                }>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={
                    styles.button
                }
                onPress={
                    () => navigation.navigate('Register')
            }>
                <Text style={
                    styles.buttonText
                }>Entrar</Text>
            </TouchableOpacity>

        </HeaderBackground>
    );
};

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        marginLeft: 280,
        marginTop: 20,
        borderRadius: 50

    },
    button: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 250,
        top: 320,
        marginLeft: 75,
        marginTop: 15,
        borderRadius: 20
    },
    image: {
        maxHeight: 200,
        maxWidth: 450,
        marginBottom: 50,
        justifyContent: 'flex-start'
    }

});

export default Home;
