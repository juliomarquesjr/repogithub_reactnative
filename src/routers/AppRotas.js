import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Repositorios from '../pages/Repositorios';

const AppRotas = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repositorios" component={Repositorios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppRotas;
