import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import { useUser } from '../../hooks/useUser';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../components/customComponents';
import { useRouter } from 'expo-router';

const Profile = () => {
  const colorScheme = useColorScheme();
  const { logout } = useUser();
  const router = useRouter();

  const handlePress = async () => {
    try {
      await logout();
      Toast.show({
        type: 'success',
        text1: 'User Logout',
        visibilityTime: 2000,
      });
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error('Logout error:', error);
      Toast.show({
        type: 'error',
        text1: 'Logout failed',
        text2: error?.message || 'Something went wrong',
      });
    }
  };

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText
        title="true"
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          marginVertical: 10,
          marginLeft: 20,
        }}
      >
        Profile
      </ThemedText>

      <Toast position="top" config={toastConfig(colorScheme)} />

      <ThemedCard>
        <ThemedText margin={10}>Email </ThemedText>

        <ThemedButton>
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
            Read Books
          </Text>
        </ThemedButton>

        <ThemedButton onPress={handlePress}>
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Logout</Text>
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
