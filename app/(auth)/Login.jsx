import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link, useRouter } from 'expo-router';

import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import ThemedInput from '../../components/ThemedInput';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

import Toast from 'react-native-toast-message';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme();

  const { login } = useUser();

  const router = useRouter();

  const handlePress = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Email and password are required',
      });
      return;
    }
    try {
      const result = await login(email, password);
      Toast.show({
        type: 'success',
        text1: 'Login successful!',
        visibilityTime: 1000,
      });
      setEmail('');
      setPassword('');
      setTimeout(() => {
        router.replace('/Books');
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: error?.message || 'Something went wrong',
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title="true" style={styles.title}>
          Login
        </ThemedText>

        <ThemedCard style={{ width: '90%', padding: 20, borderRadius: 10 }}>
          <ThemedInput
            placeholder="Enter your email"
            style={{ width: '80%', padding: 12 }}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <ThemedInput
            placeholder="Enter your password"
            style={{ width: '80%', padding: 12 }}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Spacer height={10} />
          <ThemedButton onPress={handlePress}>
            <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Login</Text>
          </ThemedButton>
        </ThemedCard>

        <Spacer height={100} />
        <Link href="/Register">
          <ThemedText>Please Register First , Signup </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
