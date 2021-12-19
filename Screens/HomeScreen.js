import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from 'react-native-paper';
import DoubleTapToClose from './close';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import data from '../Data';
import {Picker, Item} from '@react-native-picker/picker';
const HomeScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('S');
  const [selectedqty, setSelectedqty] = useState('1');
  const [modalVisible, setModalVisible] = useState(false);
  function onPressLearnMore(params) {
    console.log('ss');
  }
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
      {/* NAVBAR END */}
      <View style={styles.screen}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.address}>Deliver to Gauri Cha...56011</Text>
          <Text>H:1245-2325/4, 16th cross.Richmon...</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'black'}}>Chang/add</Text>
          </TouchableOpacity>
        </View>
        {/* OFFER DIV */}
        <View style={styles.offers}>
          <View style={{flexDirection: 'row'}}>
            <EvilIcons name="tag" size={40} />
            <Text style={styles.offtitle}>Site Offer</Text>
          </View>
          <Text style={{marginLeft: '11%'}}>
            Use SBI card for 10% instant discount on a min
          </Text>
          <Text style={{marginLeft: '11%'}}>spend of Rs.3000 TCA</Text>
          <Text style={styles.showmore}>SHOW MORE</Text>
        </View>
        {/* PRODUCT DIV */}
        {/* <FlatList
          data={data}
          renderItem={data => (
            <View>
              <Text>{data.name}</Text>
            </View>
          )}
        /> */}

        {data.map(datas => (
          <View style={styles.products}>
            <View>
              <Image
                style={styles.productimage}
                source={require('../Images/shirt.jpg')}
              />
            </View>
            <View>
              <Text style={styles.producttile}>{datas.name}</Text>
            </View>
            <View>
              <Text style={styles.productdescription}>{datas.description}</Text>
            </View>
            <View style={styles.rate}>
              <Text style={styles.rate1}>
                <FontAwesome name="rupee" size={18} /> 975
              </Text>
              <Text style={styles.rate2}>
                <FontAwesome name="rupee" size={18} /> 1499
              </Text>
              <Text style={styles.rate3}>35% Off</Text>
            </View>
            <View style={styles.productsizesection}>
              <Text style={styles.size}>Size</Text>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="S" value="S" />
                <Picker.Item label="M" value="M" />
                <Picker.Item label="L" value="L" />
                <Picker.Item label="XL" value="XLL" />
              </Picker>
            </View>
            <View style={styles.productsizesection2}>
              <Text style={styles.size}>Qty</Text>
              <Picker
                selectedValue={selectedqty}
                style={styles.picker2}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedqty(itemValue)
                }>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
              </Picker>
            </View>
            <View>
              <Text style={styles.delivery}>Free Delivery by 14th july</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.removebtn}>
                <AntDesign name="delete" size={15} />
                <Text style={{color: 'black'}}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.whistlist}>
                <AntDesign name="hearto" size={15} />
                <Text
                  style={{
                    color: 'black',
                    marginBottom: '4%',
                    paddingBottom: '2%',
                  }}>
                  Move to Whistlist
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  whistlist: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    paddingTop: 2,
    height: '25%',
    width: '48%',
    marginTop: '-6.5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '50%',
  },
  removebtn: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    height: '25%',
    width: '50%',
    marginTop: '8%',
    marginLeft: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  delivery: {
    marginLeft: '40%',
    color: '#757775',
    marginTop: '-5%',
  },
  picker2: {
    marginLeft: '-2%',
    marginTop: '-34%',
    width: '20%',
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    marginLeft: '-5%',
    marginTop: '-34%',
    width: '20%',
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productsizesection: {
    flexDirection: 'row',
  },
  productsizesection2: {
    flexDirection: 'row',
    marginLeft: '40%',
    marginTop: '-8%',
  },
  size: {
    fontSize: 15,
    marginLeft: '40%',
    color: 'black',
    marginTop: '-20%',
  },
  productsize: {
    width: '8%',
  },
  rate3: {
    fontSize: 20,
    paddingLeft: '2%',
    color: 'red',
    marginTop: '-30%',
  },
  rate2: {
    fontSize: 20,
    paddingLeft: '2%',
    color: '#878687',
    marginTop: '-30%',
    textDecorationLine: 'line-through',
  },
  rate1: {
    fontSize: 20,
    marginLeft: '40%',
    color: 'black',
    marginTop: '-30%',
  },
  rate: {
    flexDirection: 'row',
  },
  productdescription: {
    fontSize: 15,
    marginLeft: '40%',
    color: 'black',
    marginTop: '-35%',
  },
  producttile: {
    fontSize: 18,
    marginTop: '-40%',
    marginLeft: '40%',
    color: '#878687',
  },
  productimage: {
    height: '80%',
    width: '25%',
    marginLeft: '10%',
    marginTop: '4%',
  },
  products: {
    marginTop: '5%',
    height: '30%',
    backgroundColor: 'lightgray',
    width: '100%',
  },
  //offers
  showmore: {
    marginLeft: '11%',
    fontSize: 18,
    paddingTop: 4,
    color: 'black',
    textDecorationLine: 'underline',
    cursor: 'pointer',
  },
  offtitle: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 3,
  },
  offers: {
    padding: 3,
    paddingLeft: 10,
    marginTop: '3%',
    height: '16%',
    backgroundColor: 'white',
    width: '100%',
  },
  // header
  button: {
    backgroundColor: 'white',
    marginLeft: '63%',
    marginRight: '4%',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: '-7%',
    padding: 3,
    cursor: 'pointer',
  },
  address: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  header: {
    marginTop: '3%',
    height: '8%',
    backgroundColor: 'white',
    width: '100%',
  },
  screen: {
    height: '100%',
    backgroundColor: '#F0F1F2',
  },
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
