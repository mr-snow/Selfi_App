import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import { useUser } from '../../hooks/useUser';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Color';

const Profile = () => {
  const colorScheme = useColorScheme();
  const { logout, user, authChecked } = useUser();
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

      <ThemedCard style={{ flex: 0 }}>
        <ThemedText margin={10} style={{ fontSize: 14 }}>
          {user?.email ? user.email : <ThemedText>Please Login !</ThemedText>}
        </ThemedText>

        <ThemedButton>
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
            Read Books
          </Text>
        </ThemedButton>

        <ThemedButton
          onPress={handlePress}
          style={{
            backgroundColor: Colors.warning,
            position: 'absolute',
            top: 5,
            right: 4,
          }}
        >
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
            <Ionicons name="log-out-outline" size={20} />
          </Text>
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
