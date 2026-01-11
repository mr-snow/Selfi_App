import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import ThemedButton from '../../components/ThemedButton';

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText
        title="true"
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          marginVertical: 10,
          marginTop: 40,
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
      </ThemedCard>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
