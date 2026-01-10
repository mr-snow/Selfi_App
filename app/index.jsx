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

      <Spacer alignItems="center" justifyContent="center" height={20}>
        <ThemedText>Tak a Real Selfie </ThemedText>
      </Spacer>

      <Link href="/about" style={styles.link}>
        <ThemedText>About Us</ThemedText>
      </Link>
      <Link href={'/contact'} style={styles.link2}>
        <ThemedText>Contact Us</ThemedText>
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
    marginLeft: 150,
    position: 'absolute',
    bottom: 20,
  },
});
