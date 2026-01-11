import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';


import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';

const Login = () => {
  const handlePress = () => {
    console.log('Login button pressed');
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedText title="true" style={styles.title}> Login
      </ThemedText>

      <ThemedCard>
        <ThemedButton onPress={handlePress}>
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Login</Text>
        </ThemedButton>
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
