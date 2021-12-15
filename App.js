import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './Screens/MainScreen';
import SettingsScreen from './Screens/SettingsScreen';
import initialScreen from './Screens/initialScreen';

import SplashScreen from  "react-native-splash-screen";
import HomeScreen from './Screens/HomeScreen';
import SettingsMenu from './Screens/SettingsMenu';
import VoiceMenu from './Screens/VoiceMenu';

const Stack = createNativeStackNavigator();

const App = () => {
   //Hide Splash screen on app load.
   React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen options={{headerShown: false}} name="init" component={initialScreen} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
      <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: true}} name="SettingsMenu" component={SettingsMenu} />
      <Stack.Screen options={{headerShown: false}} name="VoiceMenu" component={VoiceMenu} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
