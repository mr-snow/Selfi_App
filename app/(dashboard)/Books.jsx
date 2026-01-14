import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import Toast from 'react-native-toast-message';

const Books = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText
        title="true"
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          marginVertical: 10,
          marginLeft: 20,
        }}
      >
        Read Books
      </ThemedText>

      <ThemedCard>
        <ThemedText margin={10}>Book lists </ThemedText>

        <ThemedButton
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'Login successful!',
            });
          }}
        >
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
            Add Books
          </Text>
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};
export default Books;

const styles = StyleSheet.create({});
