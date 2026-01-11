import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';

const Create = () => {
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
        Add Book
      </ThemedText>

      <ThemedCard>
        <ThemedText margin={10}>new boook </ThemedText>

        <ThemedButton>
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
            Read Books
          </Text>
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};

export default Create;

const styles = StyleSheet.create({});
