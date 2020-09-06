import React from './node_modules/react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
    return (
        <View>
            <Text style={
                styles.container
            }>Perfil</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Profile;
