import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { UserContextProvider } from '../../context/authContext';

const RootLayout = () => {
  return (
    <UserContextProvider>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: 'none' }}></Stack>
    </UserContextProvider>
  );
};

export default RootLayout;
