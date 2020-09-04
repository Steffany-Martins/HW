import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoginScreen = () => {

    return (
        <View>
            <Text style={
                styles.container
            }>Login</Text>
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

export default LoginScreen;
