import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/Home';
import ProtScreen from './screens/Prot';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
          headerShown: false // Hide header for all screens
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Prot" component={ProtScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

