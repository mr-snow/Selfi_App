import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../context/authContext';

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw error('UserContext is not found');
  }

  return context;
};
