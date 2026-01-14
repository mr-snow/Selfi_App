import { Text, View } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import ThemedLoader from '../ThemedLoader';

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();
  console.log('userOnly', authChecked, user);

  useEffect(() => {
    if (authChecked && user === null) {
      router.replace('/Login');
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    return <ThemedLoader />;
  }

  return children;
};
export default UserOnly;


