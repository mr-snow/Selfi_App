import {
  StyleSheet,
  Text,
  View,
  TextInput,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Color';

const ThemedInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[
        style,
        {
          backgroundColor: theme.inputBgColor,
          color: theme.inputTextColor,
          marginTop: 10,
          borderWidth: isFocused ? 2 : 0,
          borderColor: isFocused ? '#3cc1ff' : '#ccc',
        },
      ]}
      placeholderTextColor={theme.inputTextColor}
      {...props}
    />
  );
};
export default ThemedInput;

const styles = StyleSheet.create({});
