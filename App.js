import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import SettingsScreen from './Screens/SettingsScreen';
import initialScreen from './Screens/initialScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen options={{headerShown: false}} name="init" component={initialScreen} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
      <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
