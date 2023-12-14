import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/LoginSignup/Login/Login';
import email_sup from './src/screens/LoginSignup/Signup/email_sup';
import verification_sup from './src/screens/LoginSignup/Signup/verification_sup';
import username_sup from './src/screens/LoginSignup/Signup/username_sup';
import password_sup from './src/screens/LoginSignup/Signup/password_sup';
import account_create_sup from './src/screens/LoginSignup/Signup/account_create_sup'
import accrecover_fp from './src/screens/LoginSignup/Forgot Password/accrecover_fp';
import choosepsw_fp from './src/screens/LoginSignup/Forgot Password/choosepsw_fp';
import email_fp from './src/screens/LoginSignup/Forgot Password/email_fp';
import verification_fp from './src/screens/LoginSignup/Forgot Password/verification_fp';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="email_sup" component={email_sup} />
        <Stack.Screen name="verification_sup" component={verification_sup} />
        <Stack.Screen name="username_sup" component={username_sup} />
        <Stack.Screen name="password_sup" component={password_sup} />
        <Stack.Screen name="account_create_sup" component={account_create_sup} />

        <Stack.Screen name="accrecover_fp" component={accrecover_fp} />
        <Stack.Screen name="choosepsw_fp" component={choosepsw_fp} />
        <Stack.Screen name="email_fp" component={email_fp} />
        <Stack.Screen name="verification_fp" component={verification_fp} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
