import React, {useEffect} from 'react'
import { StyleSheet, Text, View,AsyncStorage, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const initialScreen = ({navigation}) => {

    useEffect(async() => {
        let webvalue = await AsyncStorage.getItem('key');  
        console.log(webvalue); 
        if(webvalue == null){
            navigation.navigate('Settings')
        }else{
            navigation.navigate('Splash', {
                addressdata: webvalue,
              });
        }
         
        
        // write your code here, it's like componentWillMount
        }, [])

    return (
        <View>
           <Image style={styles.imageSize2} source={require('../Images/logo.png')}   />
        </View>
    )
}

export default initialScreen

const styles = StyleSheet.create({})
