import { View, Text, useColorScheme } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Color';

const about = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background, color: theme.text },
      ]}
    >
      <Text style={[styles.title, { color: theme.title }]}>about</Text>
      <Link href="/" style={[styles.link, { color: theme.text }]}>
        Go to Home
      </Link>
    </View>
  );
};

export default about;

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
