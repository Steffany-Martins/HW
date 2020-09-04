import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {

    return (
        <View>
            <Text style={
                styles.container
            }>Home</Text>
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

export default HomeScreen;
