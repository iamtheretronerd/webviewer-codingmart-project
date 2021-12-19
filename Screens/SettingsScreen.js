import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button,AsyncStorage, TouchableOpacity, BackHandler, Alert, Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoubleTapToClose from './close'
const SettingsScreen = ({ navigation }) => {
    
    //GET INPUT VALUE
    const [address, setaddress] = useState('');

    
   
      
    function handleMobile(text){
        setaddress(text);  
    }    
    function addressSubmit(){
        AsyncStorage.setItem('key', address);  
        navigation.replace('Main', {
            addressdata: address,
          });
        
        console.log(address)
    }
    //END GET INPUT VALUE

    function handleKeyDown(e){
        if(e.nativeEvent.key == "Enter"){
            Keyboard.dismiss();
        }
    }

    return (
        <View>
             <DoubleTapToClose />
           
             
            <Text style={styles.title}>FactoryWorkx Install Settings</Text>
            <View style={{ flexDirection:"row"}}>
                <Text  style={styles.subt}>Address:</Text>
                    <TextInput
                style={{
                    borderWidth:1, margin:10, width:'73%', backgroundColor: 'white'
                    }}
                    value={address}
                    multiline={true}
                    numberOfLines={4}
                    onKeyPress={handleKeyDown}
                    onChangeText={(text)=>{handleMobile(text)}}
                />
            </View>
            
            
            <TouchableOpacity activeOpacity={0.95} style={styles.btn} onPress={addressSubmit}>
                    <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
         
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    title:{
        paddingHorizontal: 50,
        paddingVertical: 50,
        textAlign: "center",
        fontSize: 40,
        color: 'black',
    },
    subt:{
        textAlign: "center",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,
        color: 'black'
    },
    text:{
        color: 'white',
        fontSize: 20,
    },
    btn:{
        marginLeft: '60%',
        flexDirection: 'row', 
        height: 80, 
        width: 150,
        borderRadius: 20,
        paddingHorizontal:20,
        paddingVertical: 20,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%',
        elevation:3,
    }
})
