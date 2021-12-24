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
import {books} from '../Data';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/CartItem';
import Modal from 'react-native-modal';
import {Button} from 'react-native-paper';
import DoubleTapToClose from './close';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {Picker, Item} from '@react-native-picker/picker';

const HomeScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('S');
  const [selectedqty, setSelectedqty] = useState('1');
  const [modalVisible, setModalVisible] = useState(false);
  function onPressLearnMore(params) {
    console.log('ss');
  }
  function Separator() {
    return (
      <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9a9'}} />
    );
  }
  const dispatch = useDispatch();
  const addItemToCart = item => dispatch({type: ADD_TO_CART, payload: item});
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Separator()}
        renderItem={({item}) => (
          <View style={styles.bookItemContainer}>
            <Image source={{uri: item.imgUrl}} style={styles.thumbnail} />
            <View style={styles.bookItemMetaContainer}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.textAuthor}>by {item.author}</Text>
              <Text style={styles.rate}>${item.rate}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => addItemToCart(item)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rate: {
    color: 'black',
    fontSize: 18,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: '400',
  },
  textAuthor: {
    fontSize: 16,
    color: '#3b3b3b',
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#24a0ed',
    padding: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
  },
});
