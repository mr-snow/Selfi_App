import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router';

import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import ThemedInput from '../../components/ThemedInput';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useUser();

  const handlePress = async () => {
    try {
      await login(email, password);
      console.log('successfull login');
    } catch (error) {
      console.log('login error', error.message);
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
