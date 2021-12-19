import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

const signinScreenButton = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '566489472256-3cljtd1ta3tf9nnu6toef72t810fpe02.apps.googleusercontent.com'
          });
    })

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          alert(JSON.stringify(userInfo))
        //   this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              alert("1:"+error.code)
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            alert("2:"+error.code)
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            alert("3:"+error.code)
          } else {
            // some other error happened
            alert("4:"+error.code)
          }
        }
      };

    function authe(){
        auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <View>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                ></ GoogleSigninButton>
        </View>
    )
}

export default signinScreenButton

const styles = StyleSheet.create({})
