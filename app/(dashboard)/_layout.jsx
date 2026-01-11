import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Color';
import { useColorScheme } from 'react-native';

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 5,
          height: 60,
          marginBottom: 0,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    />
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
