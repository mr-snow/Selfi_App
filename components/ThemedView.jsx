import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Color';
import { useColorScheme } from 'react-native';

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[
        style,
        { backgroundColor: theme.background, color: theme.text },
        styles.container,
      ]}
      {...props}
    />
  );
};

export default ThemedView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
