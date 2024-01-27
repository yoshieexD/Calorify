
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './page/HomeScreen';

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
            headerStyle: {
              backgroundColor: '#ff3333',
            },
            headerTitleStyle: {
              fontWeight: '300',
              color: 'white',
              fontSize: 16,
            },
            headerTitleAlign: 'center',
          }}
          component={HomeScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

