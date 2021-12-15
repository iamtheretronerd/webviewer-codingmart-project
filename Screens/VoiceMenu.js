import React from 'react'
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native'
import SpeechToText from 'react-native-google-speech-to-text';


const VoiceMenu = ({navigation}) => {

    const speechToTextHandler = async () => {
 
        let speechToTextData = null;
            try {
                speechToTextData = await SpeechToText.startSpeech('Try saying something', 'en_IN');
                console.log('speechToTextData: ', speechToTextData);
                let newrec = "https://"+speechToTextData
                //voice data URL
                AsyncStorage.setItem('key', newrec);  
                navigation.replace('Main', {
                    addressdata: newrec,
                  });
     
            } catch (error) {
                console.log('error: ', error);
            }
    }

    return (
        <View style={styles.center}>
            <Button
                onPress={speechToTextHandler}
                title="Speech"
                color="#841584"
                accessibilityLabel="Speech Button"
            />
        </View>
    )
}

export default VoiceMenu

const styles = StyleSheet.create({
    center:{
       marginTop: '70%'
    }
})
