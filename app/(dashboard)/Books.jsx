import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import { useBook } from '../../hooks/useBook';
import Spacer from '../../components/Spacer';
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser';

const Books = () => {
  const colorScheme = useColorScheme();
  const { books } = useBook();
  const { user } = useUser();
  const router = useRouter();
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />
      <ThemedText
        title="true"
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          marginTop: 10,
          marginLeft: 20,
          alignSelf: 'center',
        }}
      >
        Your Reading List
      </ThemedText>
      <Spacer height={20} />
      <FlatList
        data={books}
        keyExtractor={item => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${user.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText style={styles.author}>
                written by {item.author}
              </ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
};
export default Books;
const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    padding: 15,
  },
  card: {
    width: '90%',
    marginHorizontal: 10,
    marginVertical: '5%',
    borderLeftWidth: 5,
    borderLeftColor: 'yellow',
    backgroundColor: '#f2f2f21b',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
});
