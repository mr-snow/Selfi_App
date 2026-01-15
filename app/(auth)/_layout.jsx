import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import GusetOnly from '../../components/auth/GusetOnly';
import ThemedButton from '../../components/ThemedButton';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemedText from '../../components/ThemedText';

const RootLayout = () => {
  const router = useRouter();
  return (
    <GusetOnly>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: 'none' }}></Stack>

      <ThemedButton
        style={{ position: 'absolute', top: 40, left: 10 }}
        onPress={() => router.replace('/')}
      >
        <ThemedText>
          <Ionicons name="home-sharp"></Ionicons>
        </ThemedText>
      </ThemedButton>
    </GusetOnly>
  );
};

export default RootLayout;
