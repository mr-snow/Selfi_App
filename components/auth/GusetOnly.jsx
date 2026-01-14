import { StyleSheet, Text, View } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import ThemedLoader from '../ThemedLoader';

const GusetOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace('/Books');
    }
  }, [user, authChecked]);

  if (!authChecked) {
    return <ThemedLoader />;
  }

  return children;
};
export default GusetOnly;
