import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
          <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Login'>
      <Stack.Screen 
        options={{
          headerShown: false
        }} name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}



