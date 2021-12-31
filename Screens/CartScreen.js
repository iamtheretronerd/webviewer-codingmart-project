import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Picker, Item} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {REMOVE_FROM_CART} from '../redux/CartItem';
import {ADD_TO_WHISLIST} from '../redux/CartItem';
function Separator() {
  return <View style={{marginTop: '2%'}} />;
}
function CartScreen() {
  const cart = useSelector(state => state);
  // const whislist = useSelector(states => states);
  const dispatch = useDispatch();

  // const dispatch = useDispatch();
  // const addItemToCart = item => dispatch({type: ADD_TO_CART, payload: item});

  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });
  const addItemToWhislist = item =>
    dispatch({type: ADD_TO_WHISLIST, payload: item});
  const [selectedValue, setSelectedValue] = useState('S');
  const [selectedqty, setSelectedqty] = useState('1');
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.address}>Deliver to Gauri Cha...56011</Text>
        <Text style={{marginLeft: '2%'}}>
          H:1245-2325/4, 16th cross.Richmon...
        </Text>
        <TouchableOpacity style={styles.btn}>
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
      {cart.length !== 0 ? (
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({item}) => (
            <View style={styles.bookItemContainer}>
              <Image source={{uri: item.imgUrl}} style={styles.thumbnail} />
              <View style={styles.bookItemMetaContainer}>
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.textAuthor}>{item.author}</Text>
                <View style={styles.ratecontainer}>
                  <Text style={styles.rate}>${item.rate} </Text>
                  <Text
                    style={{
                      textDecorationLine: 'line-through',
                      fontSize: 15,
                      color: '#878687',
                    }}>
                    $1499{' '}
                  </Text>
                  <Text style={{fontSize: 15, paddingLeft: '2%', color: 'red'}}>
                    35% Off
                  </Text>
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
                <Text style={styles.delivery}>Free Delivery by 14th july</Text>
                {/* <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View> */}

                <TouchableOpacity
                  onPress={() => removeItemFromCart(item)}
                  style={styles.button1}>
                  <AntDesign name="delete" size={20} />
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => addItemToWhislist(item)}
                  style={styles.button2}>
                  <AntDesign name="hearto" size={15} />
                  <Text style={styles.buttonText}>Whislist</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          {/* <Text style={styles.emptyCartMessage}>Your cart is empty :)</Text> */}
          {Alert.alert('Empty Cart')}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  delivery: {
    color: '#757775',
    marginTop: '-5%',
  },
  picker2: {
    width: '20%',
    color: 'black',
    marginLeft: '30%',
    marginTop: '-8%',
  },
  productsizesection2: {
    flexDirection: 'row',
    marginLeft: '40%',
    marginTop: '-12%',
  },
  picker: {
    width: '20%',
    color: 'black',
    marginTop: '-6%',
    marginLeft: '2%',
  },
  productsizesection: {
    flexDirection: 'row',
    marginTop: '3%',
  },
  size: {
    fontSize: 15,
    color: 'black',
  },
  ratecontainer: {
    flexDirection: 'row',
  },
  offers: {
    padding: 3,
    paddingLeft: 10,
    marginTop: '3%',
    height: '16%',
    backgroundColor: 'white',
    width: '100%',
  },
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
  //header finished
  btn: {
    backgroundColor: 'white',
    marginLeft: '63%',
    marginRight: '4%',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: '-7%',
    padding: 3,
    marginBottom: '2%',
    cursor: 'pointer',
  },
  header: {
    marginTop: '3%',
    backgroundColor: 'white',
    width: '100%',
  },
  address: {
    marginLeft: '2%',
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  rate: {
    color: 'black',
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookItemContainer: {
    marginTop: '2%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    height: 180,
    width: '100%',
  },
  thumbnail: {
    width: 90,
    height: 120,
    marginTop: 8,
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#878687',
  },
  textAuthor: {
    color: 'red',
    fontSize: 15,
    color: 'black',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    height: '14%',
    marginTop: '7%',
  },
  button1: {
    backgroundColor: 'white',
    marginLeft: '-40%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3.2%',
    flexDirection: 'row',
    width: '71.2%',
    borderTopWidth: 1,
    borderTopColor: '#A5A5A5',
  },
  button2: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
    width: '70%',
    marginTop: '-9%',
    marginLeft: '32%',
    borderTopWidth: 1,
    borderTopColor: '#A5A5A5',
    borderLeftWidth: 1,
    borderLeftColor: '#A5A5A5',
  },
  buttonText: {
    fontSize: 20,
    color: '#A5A5A5',
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartMessage: {
    fontSize: 28,
  },
});

export default CartScreen;
