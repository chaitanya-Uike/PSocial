import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import LoginScreen from './Views/Login';
import HomeScreen from './Views/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  let isLoggedIn = false;

  // add logic to check whether user is logged in

  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require("./assets/metropolis/Metropolis-Bold.otf"),
    'Metropolis-Medium': require("./assets/metropolis/Metropolis-Medium.otf"),
    'Metropolis': require("./assets/metropolis/Metropolis-Regular.otf")
  });

  // we can add a splash screen instead of this
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
        initialRouteName={isLoggedIn ? "Home" : "Login"}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
