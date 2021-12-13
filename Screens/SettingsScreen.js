import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button,AsyncStorage, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const SettingsScreen = ({ navigation }) => {
    
    //GET INPUT VALUE
    const [address, setaddress] = useState('');

    function handleMobile(text){
        setaddress(text);  
    }    
    function addressSubmit(){
        AsyncStorage.setItem('key', address);  
        navigation.navigate('Splash', {
            addressdata: address,
          });
        
        console.log(address)
    }
    //END GET INPUT VALUE

    return (
        <View>
            <Text style={styles.title}>FactoryWorkx Install Settings</Text>
            <View style={{ flexDirection:"row"}}>
                <Text  style={styles.subt}>Address:</Text>
                    <TextInput
                style={{
                    borderWidth:1, margin:10, width:'73%'
                    }}
                    value={address}
                    multiline={true}
                    numberOfLines={4}
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
        textAlign: "center",
        fontSize: 60,
    },
    subt:{
        textAlign: "center",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10
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
        marginTop: 50,
        elevation:3,
    }
})
