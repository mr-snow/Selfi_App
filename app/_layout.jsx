import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Slot, Stack } from 'expo-router';
import { Colors } from '../constants/Color';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.text,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen
          name="about"
          options={{ title: 'Abouts', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="contact"
          options={{ title: 'Contact', headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
