import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image,  Pressable, TouchableOpacity, } from 'react-native'
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

const NavBar = () => {
    const navigation = useNavigation(); 
    //google
    
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


//google end

const [modalVisible, setModalVisible] = useState(false);
    return (
                <View style={{backgroundColor: 'white'}}>
                    <View style={styles.navbar}>
                    <View style={{flexDirection: 'row'}}>
                    {/* <Image
                        style={styles.imageSize3}
                        source={require('../Images/logo.png')}
                    />
                    <Text style={styles.labelstyle}>FactoryWorkx</Text> */}

                <Pressable onPress={() => setModalVisible(true)}>
                    <Image
                    style={styles.imageSizeMenu}
                    source={require('../Images/menu.png')}
                    />
                </Pressable>
               

                <Modal
                    testID={'modal'}
                    isVisible={modalVisible}
                    animationIn="slideInLeft"
                    animationOut="slideOutLeft">
                    <View>
                    <View style={styles.modalView}>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                            style={styles.imageSizeClose}
                            source={require('../Images/close.png')}
                        />
                        <Text style={styles.name}>Hello, Ritwick S B</Text>
                        </Pressable>

                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.replace('init')}>
                        <Text style={styles.navText}>Web Viewer</Text>
                        </Pressable>

                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.replace('VoiceMenu')}>
                        <Text style={styles.navText}>VOICE SEARCH</Text>
                        </Pressable>

                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.navigate('SettingsMenu')}>
                        <Text style={styles.navText}>SETTINGS</Text>
                        </Pressable>

                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.navigate('SettingsMenu')}>
                        <Text style={styles.navText}>MY OFFERS</Text>
                        </Pressable>
                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.navigate('SettingsMenu')}>
                        <Text style={styles.navText}>FAQs</Text>
                        </Pressable>
                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.navigate('SettingsMenu')}>
                        <Text style={styles.navText}>POLICIES</Text>
                        </Pressable>
                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.navigate('SettingsMenu')}>
                        <Text style={styles.navText}>ABOUT US</Text>
                        </Pressable>
                        <Pressable
                        style={styles.menuText}
                        onPress={() => navigation.navigate('SettingsMenu')}>
                        <Text style={styles.navText}>RATE THE APP</Text>
                        </Pressable>

                        {/* GOOGLE SIGN IN */}
                        <GoogleSigninButton
                        style={{ width: 192, height: 48, marginLeft:-20, marginTop: 15, marginBottom: -12 }}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={signIn}>
                        </GoogleSigninButton>
                        {/* END */}

                        <View>
                        <Text style={styles.follow}>FOLLOW US ON</Text>
                        <View style={styles.iconsection}>
                            <Image
                            style={styles.icon}
                            source={require('../Images/fb2.png')}
                            />
                            <Image
                            style={styles.lineicon}
                            source={require('../Images/line.png')}
                            />
                            <Image
                            style={styles.icon}
                            source={require('../Images/insta.png')}
                            />
                            <Image
                            style={styles.lineicon}
                            source={require('../Images/line.png')}
                            />
                            <Image
                            style={styles.icon}
                            source={require('../Images/twiter.png')}
                            />
                            {/* <Image
                            style={styles.icon}
                            source={require('../Images/logout.png')}
                            /> */}
                            <Pressable
                            style={styles.logout}
                            onPress={() => navigation.navigate('SettingsMenu')}>
                            <Text style={styles.navlog}>LOG OUT</Text>
                            </Pressable>
                        </View>
                        </View>
                    </View>
                    </View>
                </Modal>
                </View>
            </View>
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
       // STYLES FOR NAVBAR
   lineicon: {
    height: '35%',
    width: '2%',
    marginTop: '5%',
  },
  iconsection: {
    height: '40%',
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginLeft: '-4%',
  },
  icon: {
    marginLeft: '2%',
    marginTop: '5%',
    height: 40,
    width: 40,
    borderRadius: 10,
  },

  follow: {
    fontSize: 15,
    color: 'black',
    marginTop: '6%',
    marginLeft: '-5%',
  },
  name: {
    fontSize: 20,
    color: 'black',
    marginTop: '-7%',
    marginLeft: '-5%',
    marginBottom: '5%',
  },
  navbar: {
    width: '100%',
    height: '8%',
    backgroundColor: 'white',
  },
  screen: {
    height: '100%',
  },
  imageSize3: {
    marginLeft: 20,
    marginTop: 10,
    width: 50,
    height: 50,
  },
  labelstyle: {
    fontSize: 18,
    marginTop: 20,
    color: 'black',
    marginLeft: 15,
  },
  imageSizeMenu: {
    marginLeft: '15%',
    marginTop: 15,
    width: 30,
    height: 30,
  },
  modalView: {
    marginTop: '-4%',
    marginLeft: '-5%',
    backgroundColor: 'white',
    borderRadius: 0,
    height: '105%',
    width: '111%',
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  imageSizeClose: {
    marginLeft: '100%',
    marginTop: '2%',
    width: 20,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuText: {
    width: '50%',
  },
  logout:{
    fontSize: 7,
    width: '50%',
    marginLeft: '45%',
  },
  navText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    marginTop: 18,
    marginLeft: '-10%',
    paddingTop: '4%',
  },
  navlog: {
    width: '100%',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 18,
    marginLeft: '-10%',
    paddingTop: '4%',
  },
  //   STYLES FOR NAVBAR END
})
