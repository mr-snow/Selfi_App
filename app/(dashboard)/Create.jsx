import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import ThemedInput from '../../components/ThemedInput';
import { useState } from 'react';
import Spacer from '../../components/Spacer';
import Toast from 'react-native-toast-message';
import { useBook } from '../../hooks/useBook';
import { useRouter } from 'expo-router';

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const { createBook } = useBook();
  const router = useRouter();

  const handlePress = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) return;
    try {
      const response = await createBook({ title, author, description });
      console.log('response ', response);

      setTimeout(() => {
        router.replace('/Books');
      }, 2000);
    } catch (error) {
      console.log(error.message);
      Toast.show({ type: 'error', text1: error.message });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={{ alignItems: 'center' }} safe={true}>
        <Spacer />
        <ThemedText
          title="true"
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            marginVertical: 20,
            marginLeft: 20,
          }}
        >
          Add Book
        </ThemedText>
        <ThemedCard
          style={{
            width: '90%',
            flex: 0,
            padding: 20,
            borderRadius: 6,
            alignSelf: 'center',
            marginHorizontal: 40,
            alignItems: 'center',
            justifyContent: 'start',
          }}
        >
          <ThemedInput
            placeholder="Enter Book name"
            style={{
              width: '80%',
              padding: 15,

              borderRadius: 6,
            }}
            value={title}
            onChangeText={setTitle}
          />
          <Spacer height={20} />

          <ThemedInput
            placeholder="Enter Author name"
            style={{
              width: '80%',
              padding: 12,
              alignSelf: 'center',
              marginHorizontal: 40,
              borderRadius: 6,
            }}
            value={author}
            onChangeText={setAuthor}
          />
          <Spacer height={20} />

          <ThemedInput
            placeholder="Enter Descriptions "
            style={{
              width: '80%',
              padding: 15,
              alignSelf: 'center',
              marginHorizontal: 40,
            }}
            value={description}
            multiline={true}
            onChangeText={setDescription}
          />
          <Spacer height={20} />

          <ThemedButton onPress={handlePress} disable={loading}>
            <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
              {loading ? 'saving' : 'Create'}
            </Text>
          </ThemedButton>
        </ThemedCard>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Create;

const styles = StyleSheet.create({});
