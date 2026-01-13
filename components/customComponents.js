import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Colors } from '../constants/Color';
import { useColorScheme } from 'react-native';

export const toastConfig = colorScheme => {
  const theme = Colors[colorScheme] ?? Colors.light;
  return {
    success: props => (
      <BaseToast
        {...props}
        style={{ backgroundColor: theme.successToastBg }}
        text1Style={{ color: theme.successToastText, fontSize: 14 }}
        text2Style={{ color: theme.successToastText, fontSize: 12 }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        style={{ backgroundColor: theme.errorToastBg }}
        text1Style={{ color: theme.errorToastText, fontSize: 14 }}
        text2Style={{ fontSize: 12, color: theme.errorToastText }}
      />
    ),
  };
};
