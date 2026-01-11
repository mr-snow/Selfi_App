import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Color';
import { useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe) {
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
  }

  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        style,
        {
          backgroundColor: theme.background,
          color: theme.text,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
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
