import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function ShoppingCartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state);

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        style={styles.button}>
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemCountText}>{cartItems.length}</Text>
        </View>
        <View style={styles.itemCountWishlist}>
          <Text style={styles.itemCountText1}>0</Text>
        </View>

        <View style={{ marginLeft: 45, top: -17, position: 'absolute' }}>
          <Icon
            name="shopping-bag"
            type='FontAwesome'
            color="black"
            size={32}
            style={{ top: 1, left: 2, paddingLeft: 1 }} />
          {/* <AntDesign name="hearto" size={28}  style={{ top: -28,left: -40}}  />
       <Ionicons name="search-outline" size={31}  style={{marginTop:-46,top: -12,left: -85}}  />
       <TouchableOpacity onPress={() => navigation.navigate('Landing')}></TouchableOpacity>
       <AntDesign name="left"  size={25}  style={{top:-3,marginTop:-40,right:336}}/> */}

        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Landing')}
      >
        <View style={{ top: 32, left: -10 }}>
          < AntDesign name="hearto" size={28} style={{ top: -30, left: -1 }} />
        </View>
      </TouchableOpacity>
      <View style={{ left: -14, top: 3 }}>
        <Ionicons name="search-outline" size={31} style={{ left: -70 }} />

      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Landing')}
      >
        <View style={{ position: 'relative', right: 350 }}>
          <AntDesign name="left" size={25} style={{ top: 1 }} />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
  itemCountContainer: {
    position: 'absolute',
    height: 18,
    width: 18,
    borderRadius: 1,
    backgroundColor: 'black',
    right: -80,
    bottom: 10,
    top: -2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,

  },
  itemCountWishlist: {
    position: 'absolute',
    height: 18,
    width: 18,
    borderRadius: 1,
    backgroundColor: 'black',
    right: -34,
    bottom: 10,
    top: -2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemCountText1: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ShoppingCartIcon;
