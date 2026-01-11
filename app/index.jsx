import { StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.image} />

      <ThemedText style={styles.title} title={true}>
        Selfie
      </ThemedText>

      <Spacer alignItems="center" justifyContent="center" height={30}>
        <ThemedText>Tak a Real Selfie </ThemedText>
      </Spacer>
      <Spacer height={20} />
      <Link href="/Books" style={styles.link}>
        <ThemedText>Books</ThemedText>
      </Link>
      <Link href={'/Register'} style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>
    </ThemedView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: '#f80505',
    marginTop: 10,
    textDecorationLine: 'underline',
    bottom: 20,
    fontWeight: '600',
  },
});
