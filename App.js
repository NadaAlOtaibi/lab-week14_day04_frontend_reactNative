import React from 'react';
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Snaps from './screens/Snaps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}/>   
         <Stack.Screen name="Snaps" component={Snaps}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}