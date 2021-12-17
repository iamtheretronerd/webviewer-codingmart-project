import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import DoubleTapToClose from './close';

const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <DoubleTapToClose />
      {/* NAVBAR START */}
      <View style={styles.navbar}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.imageSize3}
            source={require('../Images/logo.png')}
          />
          <Text style={styles.labelstyle}>FactoryWorkx</Text>

          <Pressable onPress={() => setModalVisible(true)}>
            <Image
              style={styles.imageSizeMenu}
              source={require('../Images/menu.png')}
            />
          </Pressable>

          <Modal
            testID={'modal'}
            isVisible={modalVisible}
            animationIn="slideInRight"
            animationOut="slideOutRight">
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
                  onPress={() => navigation.replace('Home')}>
                  <Text style={styles.navText}>HOME</Text>
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
                  </View>
                </View>
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
  );
};

export default HomeScreen;

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
    height: '35%',
    width: '15%',
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
    height: '10%',
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
    marginLeft: '62%',
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
  navText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginLeft: '-10%',
    paddingTop: '4%',
  },
  //   STYLES FOR NAVBAR END
});
