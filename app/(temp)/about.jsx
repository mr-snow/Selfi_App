import { View, Text, useColorScheme } from 'react-native';

import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';

const about = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        About
      </ThemedText>
      <ThemedCard>
        <ThemedText>
          Selfi is a cutting-edge mobile application designed to enhance your
          selfie-taking experience. With advanced features and user-friendly
          interface, Selfi allows you to capture stunning selfies effortlessly.
        </ThemedText>
      </ThemedCard>
      <Link href="/">
        <ThemedText style={styles.link}>Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default about;

const styles = StyleSheet.create({
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
    textDecorationLine: 'underline',
    color: '#f4e000',
    marginTop: 20,
  },
});
