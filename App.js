import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InAppReview from 'react-native-in-app-review';

import MainScreen from './Screens/MainScreen';
import SettingsScreen from './Screens/SettingsScreen';
import initialScreen from './Screens/initialScreen';
import LandingPage from './Screens/LandingPage'


import SplashScreen from  "react-native-splash-screen";
import HomeScreen from './Screens/HomeScreen';
import SettingsMenu from './Screens/SettingsMenu';
import VoiceMenu from './Screens/VoiceMenu';
import BookScreen from './Screens/BookScreen';
import CartScreen from './Screens/CartScreen';
import TableScreen from './Screens/TableScreen';
//Camera
import Camera from './components/Camera'

import ShoppingCartIcon from './components/ShoppingCartIcon';
import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'
import NavBar from './Modules/NavBar';


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
    <StoreProvider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Landing" component={LandingPage} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
      <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="SettingsMenu" component={SettingsMenu} />
      <Stack.Screen options={{headerShown: false}} name="VoiceMenu" component={VoiceMenu} />
      <Stack.Screen options={{headerShown: false}} name="BookScreen" component={BookScreen}options={{ headerRight: props => <ShoppingCartIcon {...props} /> }} />
      <Stack.Screen options={{headerShown: false}} name="CartScreen" component={CartScreen} />
      <Stack.Screen options={{headerShown: false}} name="init" component={initialScreen} />
      <Stack.Screen options={{headerShown: false}} name="camera" component={Camera} />
      <Stack.Screen options={{headerShown:false}} name="navbar" component={NavBar} />
      <Stack.Screen options={{headerShown:false}} name="TableScreen" component={TableScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  </StoreProvider>
  
  )
}

export default App

const styles = StyleSheet.create({})
