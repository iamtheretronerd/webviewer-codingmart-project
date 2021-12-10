import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const SettingsScreen = ({ navigation }) => {
    
    //GET INPUT VALUE
    const [address, setaddress] = useState('');

    function handleMobile(text){
        setaddress(text);  
    }    
    function addressSubmit(){
        navigation.navigate('Splash', {
            addressdata: address,
          });
        
        console.log(address)
    }
    //END GET INPUT VALUE

    return (
        <View>
           <TextInput
           style={{
               borderWidth:1, margin:10
            }}
            value={address}
            onChangeText={(text)=>{handleMobile(text)}}
           />
          <Button
            onPress={addressSubmit}
            title="Save"
            color="#841584"
            />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})
