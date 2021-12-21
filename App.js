import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InAppReview from 'react-native-in-app-review';

import MainScreen from './Screens/MainScreen';
import SettingsScreen from './Screens/SettingsScreen';
import initialScreen from './Screens/initialScreen';

import SplashScreen from  "react-native-splash-screen";
import HomeScreen from './Screens/HomeScreen';
import SettingsMenu from './Screens/SettingsMenu';
import VoiceMenu from './Screens/VoiceMenu';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';
import { Provider } from 'react-redux';
import configureStore from './src/store';
const store = configureStore();

InAppReview.isAvailable();
InAppReview.RequestInAppReview()
  .then((hasFlowFinishedSuccessfully) => {
    console.log('InAppReview in android', hasFlowFinishedSuccessfully);
    console.log(
        'InAppReview in ios has launched successfully',
        hasFlowFinishedSuccessfully,
      );
      if (hasFlowFinishedSuccessfully) {
    }
})
.catch((error) => {
    console.log(error);
  });
  
  
const Stack = createNativeStackNavigator();

const App = () => {
   //Hide Splash screen on app load.
   React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="init" component={initialScreen} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
      <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="SettingsMenu" component={SettingsMenu} />
      <Stack.Screen options={{headerShown: false}} name="VoiceMenu" component={VoiceMenu} />
      <Stack.Screen options={{headerShown: false}} name="FoodForm" component={FoodForm} />
      <Stack.Screen options={{headerShown: false}} name="FoodList" component={FoodList} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
