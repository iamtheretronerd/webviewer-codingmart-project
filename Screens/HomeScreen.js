import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import Modal from 'react-native-modal';
import DoubleTapToClose from './close';

const HomeScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
             <DoubleTapToClose />
            {/* NAVBAR START */}
            <View style={styles.navbar}>
            <View style={{ flexDirection:"row"}}>
                <Image style={styles.imageSize3} source={require('../Images/logo.png')}  />
                <Text style={styles.labelstyle}>FactoryWorkx</Text>

                <Pressable
                  onPress={() => setModalVisible(true)}
                >
                   <Image style={styles.imageSizeMenu} source={require('../Images/menu.png')}  />
                </Pressable>


                <Modal
                  testID={'modal'}
                  isVisible={modalVisible}
                  animationIn="slideInRight"
                  animationOut="slideOutRight">

                  <View>
                      <View style={styles.modalView}>
                        <Pressable
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                           <Image style={styles.imageSizeClose} source={require('../Images/close.png')}  />
                        </Pressable>

                        <Pressable style={styles.menuText}
                          onPress={() => navigation.replace('Home')}
                        >
                           <Text style={styles.navText}>Home</Text>
                        </Pressable>



                        <Pressable style={styles.menuText}
                          onPress={() => navigation.replace('VoiceMenu')}
                        >
                           <Text style={styles.navText}>Voice Search</Text>
                        </Pressable>


                        <Pressable style={styles.menuText}
                          onPress={() => navigation.navigate('SettingsMenu')}
                        >
                           <Text style={styles.navText}>Settings</Text>
                        </Pressable>


                      </View>
                    </View>

                </Modal>

            </View>

         </View>
         <View style={styles.screen}>
            <Text>Hello</Text>
         </View>
            
         {/* NAVBAR END */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    // STYLES FOR NAVBAR
    navbar:{
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
      },
      screen:{
        height: '100%'
      },
      imageSize3:{
        marginLeft: 20,
        marginTop: 10,
        width: 50,
        height: 50,
    },
    labelstyle:{
        fontSize: 18,
        marginTop: 20,
        color: 'black',
        marginLeft: 15,
      },
      imageSizeMenu:{
        marginLeft: '62%',
          marginTop: 15,
          width: 30,
          height: 30,
      },
      modalView: {
        marginTop: '-4%',
        marginLeft: '50%',
        backgroundColor: "white",
        borderRadius: 0,
        height:'105%',
        width:'55%',
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
      },
      imageSizeClose:{
        marginLeft: '120%',
          marginTop: '-20%',
          width: 20,
          height: 20,
      },
      menuText:{
        width: '100%',
      },
      navText:{
        width: '100%',
        textAlign: 'left',
        fontSize: 22,
        color: 'black',
        marginTop: 18,
        marginLeft: '-15%',
       
      }
    //   STYLES FOR NAVBAR END
})
