import { Text, View } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useEffect } from 'react';
import { useRouter, useSegments, useRootNavigationState } from 'expo-router';
import ThemedLoader from '../ThemedLoader';

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();
  console.log('userOnly', authChecked, user);
  const segments = useSegments();

  const inDashboard = segments[0] === '(dashboard)';

  useEffect(() => {
    if (authChecked && user === null && inDashboard) {
      router.replace('/Login');
    }
  }, [user, authChecked, segments]);

  if (!authChecked) {
    return <ThemedLoader />;
  }

  // redirecting → block render briefly
  if (!user && inDashboard) {
    return <ThemedLoader />;
  }

  return children;
};
export default UserOnly;
