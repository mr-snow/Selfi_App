import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import Logo from '../assets/image/favicon.png';
import { Colors } from '../constants/Color';

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background, color: theme.text },
      ]}
    >
      <Image source={Logo} style={styles.image} />
      <Text style={[styles.title, { color: 'purple' }]}>The Number 1 </Text>
      <Text style={{ fontStyle: 'italic', color: theme.text }}>
        Reading List App2{' '}
      </Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href={'/contact'} style={styles.link2}>
        Contact
      </Link>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  image: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#9ce13572',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontStyle: 'italic',
    color: '#b91717',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    fontWeight: '600',
  },
  link2: {
    fontStyle: 'italic',
    color: '#b91717',
    fontWeight: '600',
    marginTop: 20,
    right: 70,
    position: 'absolute',
    bottom: 20,
  },
});
