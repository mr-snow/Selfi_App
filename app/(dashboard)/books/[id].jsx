import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ThemedView from '../../../components/ThemedView';
import ThemedText from '../../../components/ThemedText';
import { useLocalSearchParams } from 'expo-router';

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <ThemedView safe={true}>
      <ThemedText style={{ marginTop: 20, marginLeft: 20 }}>
        Book Details : {id}
      </ThemedText>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({});


