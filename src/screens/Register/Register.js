import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RegisterScreen = () => {

    return (
        <View>
            <Text style={
                styles.container
            }>Register</Text>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default RegisterScreen;
