import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';
import { useUser } from '../../hooks/useUser';

const Profile = () => {
  const { logout } = useUser();

  const handlePress = async () => {
    try {
      await logout();
      console.log('successfull logout');
    } catch (error) {
      console.log('logout error :', error.message);
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
