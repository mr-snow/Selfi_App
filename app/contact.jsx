import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <Link href="/" style={styles.link}>
        Go to Home
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  image: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#9ce13572',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7c1e0d',
  },
  link: {
    fontStyle: 'italic',
    color: 'blue',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
  },
});
