import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ThemedView from '../../../components/ThemedView';
import ThemedText from '../../../components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import ThemedCard from '../../../components/ThemedCard';
import { useBook } from '../../../hooks/useBook';
import ThemedLoader from '../../../components/ThemedLoader';
import Spacer from '../../../components/Spacer';

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState(null);
  const { getBookById } = useBook();

  useEffect(() => {
    async function loadBook() {
      if (!id) return;
      const response = await getBookById(id);
      setBook(response);
      console.log('lgetbyid', response);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return <ThemedLoader />;
  }
  
  return (
    <ThemedView safe={true}>
      <Spacer />
      <ThemedText style={{ marginLeft: 20 }}>Book Details : {id}</ThemedText>
      <Spacer height={15} />
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>Book Name : {book?.title} </ThemedText>
        <ThemedText style={styles.author}>
          written by {book?.author}{' '}
        </ThemedText>
        <Spacer height={10} />
        <ThemedText style={{ fontWeight: 700, marginVertical: 10 }}>
          description
        </ThemedText>
        <ThemedText style={styles.description}>{book?.description} </ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  card: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 900,
  },
  author: {
    fontSize: 14,
  },
  description: {
    borderColor: '#26d100',
    borderWidth: 0.5,
    padding: 20,
  },
});
