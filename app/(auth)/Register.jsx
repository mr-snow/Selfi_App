import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';
import ThemedCard from '../../components/ThemedCard';

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title="true" style={styles.title}>
        Register
      </ThemedText>
      <ThemedCard>
        <ThemedText margin={10}>This is the Register card content.</ThemedText>
      </ThemedCard>
      <Spacer height={100} />
      <Link href="/Login">
        <ThemedText>Login </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
