import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AsyncStorage } from 'react-native'




const SettingsMenu = ({navigation}) => {

    function clearURLfn(){
        Alert.alert(
            "Clear URL",
            "Do you want to clear existing URL ?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                  console.log("done")
                  AsyncStorage.setItem('key', 'null'); 
                  navigation.replace('Settings')
                  
              }}
            ]
          );
    }
    
    return (
        <View>
            <Button
                onPress={clearURLfn}
                title="Clear URL"
                color="#841584"
                accessibilityLabel="Clear Stored URL"
                />
        </View>
    )
}

export default SettingsMenu

const styles = StyleSheet.create({})
