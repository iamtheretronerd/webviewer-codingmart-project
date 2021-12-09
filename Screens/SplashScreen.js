import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';


var delayInMilliseconds = 5000; //1 second

const url = "https://www.zoho.com/expense/?"; 

const SplashScreen = ( { navigation } ) => {

    function LoadingIndicatorView() {
        return  (
            <View style={styles.centerPage}>
                <Image style={styles.imageSize} source={require('../Images/logo.png')}   /> 
            </View>

        )
      }
    

    return (
        
        <WebView
        //Loading URL
        source={{uri: url}}
        //Enable Javascript support
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        //View to show while loading the webpage
        renderLoading={LoadingIndicatorView}
        //Want to show the view or not
        startInLoadingState={true}
      />
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    centerPage: {
            alignItems: 'center'
      },
      imageSize:{

          width: '70%',
          height: '70%'
      }
})
