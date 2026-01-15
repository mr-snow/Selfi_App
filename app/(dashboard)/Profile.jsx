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
import Spacer from '../../components/Spacer';

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
        visibilityTime: 1000,
      });

      router.replace('/');
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
      <Spacer />
      <View style={styles.profile}>
        <ThemedText>
          <Ionicons name="person-circle" size={24}></Ionicons>
        </ThemedText>
        <ThemedText style={{ fontSize: 24 }}>Profile</ThemedText>
      </View>

      <ThemedCard style={{ flex: 0.5 }}>
        <ThemedText margin={15} style={{ fontSize: 14 }}>
          Email :{' '}
          {user?.email ? user.email : <ThemedText>Please Login !</ThemedText>}
        </ThemedText>

        <ThemedButton
          onPress={handlePress}
          style={{
            backgroundColor: '#f2f2f22c',
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>
            <Ionicons name="log-out-outline" size={18} />
          </Text>
        </ThemedButton>
      </ThemedCard>
      <Spacer />
      <ThemedText style={{ alignSelf: 'center' }}>
        Make your profile shine ✨{' '}
      </ThemedText>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    marginVertical: 10,
    marginLeft: 20,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
});
