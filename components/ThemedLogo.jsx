import { StyleSheet, Text, Image } from 'react-native';
import { Colors } from '../constants/Color';
import { useColorScheme } from 'react-native';

import DarkLogo from '../assets/image/selfie_dark.jpg';
import LightLogo from '../assets/image/selfie_light.jpg';

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;

  return <Image source={logo} style={[styles.image, style]} {...props} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({
  image: {
    borderRadius: 75,
    width: 120,
    height: 120,
  },
});





