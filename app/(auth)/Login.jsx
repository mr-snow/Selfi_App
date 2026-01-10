import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';
import ThemedCard from '../../components/ThemedCard';

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title="true" style={styles.title}>
        Login
      </ThemedText>
      <ThemedCard>
        <ThemedText margin={10}>This is the login card content.</ThemedText>
      </ThemedCard>
      <Spacer height={100} />
      <Link href="/Register">
        <ThemedText>Register </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

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
