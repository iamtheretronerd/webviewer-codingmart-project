import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView,  TextInput, Image, Pressable, Button } from 'react-native'
import Swiper from 'react-native-web-swiper';
import IconsLayout from '../Modules/iconsLayout';
import NavBar from '../Modules/NavBar';
import SwiperLayout from '../Modules/SwiperLayout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PhoneInput from 'react-native-phone-input'

import Modal from 'react-native-modal';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';


const LandingPage = () => {
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
    
    

    const [modalVisible, setModalVisible] = useState(true);

    const [otp, onChangeotp] = React.useState("");

    const [text, onChangeText] = React.useState("")
    return (
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <Modal
                    testID={'modal'}
                    isVisible={modalVisible}
                    >
                        <View style={styles.modalView}>
                            
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Image
                                style={styles.imageSizeClose}
                                source={require('../Images/close.png')}
                            />
                            <Text style={styles.h1}>Welcome to FactoryWorkx</Text>
                            <Text style={styles.h2}>Sign Up / Login To See Your Order History</Text>
                            <Text style={styles.hphone}>Please enter your mobile number</Text>
                                <View style={styles.otpinputbox}>
                                    <Text style={{color: 'black', marginLeft:10, marginTop:3, fontSize: 15}}>Phone Number</Text>
                                    <View style={styles.row}>
                                    <Text style={{marginLeft:5, marginTop:5, color: 'black'}}>+91 |</Text>
                                        <TextInput
                                            style={styles.otpinput}
                                            onChangeText={onChangeotp}
                                            value={otp}
                                        />
                                    </View>
                                   
                                </View>
                           
                            <Text style={{textAlign: 'center',marginTop:15}}>
                                <Text>By signing up I agree to  </Text>
                                <Text style={{color:'black', textDecorationLine:'underline'}}>Terms of use </Text>
                                <Text>and </Text>
                                <Text style={{color:'black', textDecorationLine:'underline'}}>Privacy Policy</Text>
                            </Text>
                            
                            <View style={{height: 15}} />

                            <Button
                                onPress={() => setModalVisible(false)}
                                title="Submit"
                                color="black"
                            />

                            <View style={{height: 1, backgroundColor: 'lightgrey', marginTop:30}} />

                            <GoogleSigninButton
                                style={{ width: '100%', height: 48, marginTop: 15  }}
                                color={GoogleSigninButton.Color.Light}
                                onPress={signIn}>
                                </GoogleSigninButton>

                        </Pressable>

                        </View>
            </Modal>

            <NavBar />
            <View style={styles.inputcontainer}>
                <View style={styles.innerinputcontainer}>
                  <TextInput
                        style={styles.input}
                        placeholder='&nbsp; &nbsp; Search' 
                        onChangeText={onChangeText}
                        value={text}
                    />
                     <Image style={styles.imageSizeicon} source={require('../Images/search.png')}  />
                     <Image style={styles.imageSizeicon} source={require('../Images/camera.png')}  />
                </View>
            </View>
            {/* INPUT OVER */}
            <IconsLayout/>
            <View style={styles.spaces} />
            {/* STATUS OVER */}
            <SwiperLayout />
            <View style={styles.bnav} >
                <View style={styles.bnavrow}>
                    <View style={styles.navbox}>
                        <Image style={styles.imageSizeicon2} source={require('../Images/home.png')}  />
                        <Text style={{textAlign: 'center',color:'black'}}>Home</Text>
                    </View>
                    <View style={{width:1, backgroundColor:'#666666'}} />
                    <View style={styles.navbox}>
                         <Image style={styles.imageSizeicon3} source={require('../Images/circlemenu.png')}  />
                        <Text style={{textAlign: 'center',color:'#666666'}}>Categories</Text>
                    </View>
                    <View style={{width:1, backgroundColor:'#666666'}} />
                    <View style={styles.navbox}>
                        <Image style={styles.imageSizeicon3} source={require('../Images/user.png')}  />
                        <Text style={{textAlign: 'center',color:'#666666'}}>Account</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    h1:{
        fontSize: 23,
        textAlign: 'center',
        color: 'teal'
    },
    h2:{
        fontSize:17,
        textAlign: 'center',
        marginTop: 8
    },
    hphone:{
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
    modalView:{
        marginTop: '100%',
        marginLeft: '-6%',
        backgroundColor: 'white',
        borderRadius: 0,
        height: '95%',
        width: '113%',
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        }
    },
    imageSizeClose:{
        marginLeft: '95%',
        marginTop: '-5%'
    },
    input:{
        backgroundColor: '#eeeeee',
        width: '73%'
    },
    otpinputbox:{
        backgroundColor: '#ffffff',
        borderWidth: 1,
        width: '85%',
        height: '15%',
        marginLeft: 25,
        marginTop: 15,
    },
    otpinput:{
        backgroundColor: '#fff',
        width: '87%',
        height: '58%',
    },
    spaces:{
        height: 14,
    },
    bnav:{
        height: '10%'
    },
    bnavrow:{
        flexDirection: 'row',
    },
    navbox:{
        width: '35%',
    },
    inputcontainer:{
        paddingVertical: 10,
        paddingHorizontal:10,
        width: '100%',
        flexDirection: 'row',
    },
    row:{
        flexDirection: 'row',
    },
    innerinputcontainer:{
        width: '98%',
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        paddingTop: 8,
        marginHorizontal: 7,
        marginBottom: 8,
    },
    imageSizeicon:{
        width:30,
        height: 30,
        marginHorizontal: 10,
        marginTop: 7
    },
    imageSizeicon2:{
        width:40,
        height: 40,
        marginHorizontal: '35%',
    },
    imageSizeicon3:{
        width:40,
        height: 40,
        marginHorizontal: '35%',
        opacity: 0.7
    },
    statusContainer:{
        width: '100%',
        height: '15%',
       
    },
    imageSizeSlider:{
        width:'100%',
        height: '95%',
    },
    imageSizeStatus:{
        width:80,
        height: 80,
        marginHorizontal: 5,
        borderRadius: 400/ 2
    },
    container: {
        flex: 1,
      },

      
})
