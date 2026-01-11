import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Color';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground, paddingTop: 5, height: 60, marginBottom: 0,
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={20}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Books"
        options={{
          title: 'Books',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'bookmark' : 'bookmarks-outline'}
              size={20}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          title: 'Create',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'create' : 'create-outline'}
              size={20}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
