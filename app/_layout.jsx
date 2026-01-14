import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Slot, Stack } from 'expo-router';
import { Colors } from '../constants/Color';
import { StatusBar } from 'expo-status-bar';
import { UserContextProvider } from '../context/authContext';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../components/customComponents';
import { BookContextProvider } from '../context/bookContext';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <UserContextProvider>
      <BookContextProvider>
        <StatusBar value="auto" />

        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.text,
          }}
        >
          <Stack.Screen
            name="index"
            options={{ title: 'Home', headerShown: false }}
          />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        </Stack>
        <Toast
          position="top"
          style={styles.ToastStyle}
          config={toastConfig(colorScheme)}
        />
      </BookContextProvider>
    </UserContextProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
