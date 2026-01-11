import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';

const Books = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText
        title="true"
        style={{
          fontWeight: 'bold',   fontSize: 24,  marginVertical: 10, marginLeft: 20,marginTop:40,
        }}
      >
        Read Books
      </ThemedText>

      <ThemedCard>
        <ThemedText margin={10}>Book lists </ThemedText>

        <ThemedButton>
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
