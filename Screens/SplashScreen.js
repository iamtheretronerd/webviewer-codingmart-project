import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';


var delayInMilliseconds = 5000; //1 second



const SplashScreen = ( { route, navigation } ) => {
    const { addressdata } = route.params;
   
    const Error = ({ reload }) => {
        return (
          <View style={styles.loadingWrapper}>
               <Image style={styles.imageSize2} source={require('../Images/network-error.png')}   />
               <Text style={styles.network}>Network Error</Text>
              <View style={{ flexDirection:"row"}}>
                    <View style={styles.buttonStyle}>
                                <Button
                            onPress={() => { WebViewRef && WebViewRef.reload(); }}
                            title="reload"
                            color="#841584"
                            />
                    </View>
                    <View style={styles.buttonStyle}>
                            <Button
                        onPress={() => { navigation.replace('Settings') }}
                        title="Exit"
                        color="#841584"
                        />
                    </View>
                </View>
            
          </View>
        );
      };

    function LoadingIndicatorView() {
        return  (
            <View style={styles.centerPage}>
                <Image style={styles.imageSize} source={require('../Images/logo.png')}   />
            </View>

        )
      }
      const reload = () => webview.current.reload();
    
      let WebViewRef;
    return (
       
        <WebView
        ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
        //Loading URL
        source={{uri: addressdata}}
        //Enable Javascript support
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        //View to show while loading the webpage
        renderLoading={LoadingIndicatorView}
        //Want to show the view or not
        startInLoadingState={true}
        renderError={() => <Error reload={reload} />}
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
      },
      imageSize2:{

        width: 180,
        height: 180,
    },
    network:{
        marginHorizontal: 10,
        marginTop: 50,
        color: 'white',
        fontSize: 20
    },
      loadingWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        alignItems: 'center',
        height: '100%',
        width:'100%'
      },
      buttonStyle: {
        marginHorizontal: 5,
        marginTop: 5,
        width: '30%',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }
})
