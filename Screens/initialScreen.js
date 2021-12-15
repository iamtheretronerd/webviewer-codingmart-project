import React, {useEffect} from 'react'
import { StyleSheet, Text, View,AsyncStorage, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoubleTapToClose from './close';
import PushNotification from "react-native-push-notification";

const initialScreen = ({navigation}) => {

    useEffect(async() => {
        createChannels();
        let webvalue = await AsyncStorage.getItem('key');  
        console.log(webvalue); 
        if(webvalue == null || webvalue == "null"){
            navigation.replace('Settings')
        }else{
            navigation.replace('Main', {
                addressdata: webvalue,
              });
        }
         
        
        // write your code here, it's like componentWillMount
        }, [])

        const createChannels = () => {
            PushNotification.createChannel(
                {
                    channelId: "factoryWorkx",
                    channelName: "factoryWorkx"
                }
            )
        }

    return (
        <View>
            <DoubleTapToClose />
           <Image style={styles.imageSize2} source={require('../Images/logo.png')}   />
        </View>
    )
}

export default initialScreen

const styles = StyleSheet.create({})
