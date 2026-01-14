import { ActivityIndicator, useColorScheme, Text } from 'react-native';
import { Colors } from '../constants/Color';
import ThemedView from './ThemedView';

const ThemedLoader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ActivityIndicator size={'large'} color={theme.text} />
      <Text style={{ fontSize: Colors.textSize }}>Loading..</Text>
    </ThemedView>
  );
};

export default ThemedLoader;
