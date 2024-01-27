
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './page/homeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false
        }}>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Calorify',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'rgb(67 56 202)',
              fontSize: 18,
            }
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
