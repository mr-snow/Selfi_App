import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import GusetOnly from '../../components/auth/GusetOnly';

const RootLayout = () => {
  return (
    <GusetOnly>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: 'none' }}></Stack>
    </GusetOnly>
  );
};

export default RootLayout;
