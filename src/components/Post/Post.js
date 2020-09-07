import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Post({title, text, url, children}) {
  return (
    <View style={styles.box}>
      <View style={styles.user}>
        <Image source={url} style={{width: 50, height: 50, borderRadius: 20}} />
        <View style={{marginLeft: 20}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 40,
    backgroundColor: '#fff',
    width: '100%',
    height: 200,
    marginBottom: 20,
    flex: 1,
    top: 10,
  },
  container: {
    marginLeft: 30,
    top: 30,
    marginRight: 25,
  },
  user: {
    top: 10,
    left: 20,
    flexDirection: 'row',
  },
  title: {
    color: '#694fad',
    fontSize: 25,
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
});
