import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Color';
import { useColorScheme } from 'react-native';

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      style={[
        { backgroundColor: theme.uiBackground, color: theme.text },
        styles.card,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: { padding: 20, borderRadius: 2 },
});


