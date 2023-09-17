import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forms from './src/screens/Forms'; 
import Home from './src/screens/Home'; 
import End from './src/screens/End';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Forms">
        <Stack.Screen name="Forms" component={Forms} options={{ title: 'Formulário' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Pokedex' }} />
        <Stack.Screen name="End" component={End} options={{ title: 'Tela Final' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
