// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import {books} from '../Data';
// import {useDispatch} from 'react-redux';
// import {ADD_TO_CART} from '../redux/CartItem';
// import Modal from 'react-native-modal';
// import {Button} from 'react-native-paper';
// import DoubleTapToClose from './close';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {black} from 'react-native-paper/lib/typescript/styles/colors';
// import {Picker, Item} from '@react-native-picker/picker';

// const HomeScreen = ({navigation}) => {
//   const [selectedValue, setSelectedValue] = useState('S');
//   const [selectedqty, setSelectedqty] = useState('1');
//   const [modalVisible, setModalVisible] = useState(false);
//   function onPressLearnMore(params) {
//     console.log('ss');
//   }
//   function Separator() {
//     return (
//       <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9a9'}} />
//     );
//   }
//   const dispatch = useDispatch();
//   const addItemToCart = item => dispatch({type: ADD_TO_CART, payload: item});
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={books}
//         keyExtractor={item => item.id.toString()}
//         ItemSeparatorComponent={() => Separator()}
      
//         renderItem={({item}) => (
//           <View style={styles.bookItemContainer}>
//             <Image source={{uri: item.imgUrl}} style={styles.thumbnail} />
//             <View style={styles.bookItemMetaContainer}>
//               <Text style={styles.textTitle} numberOfLines={1}>
//                 {item.name}
//               </Text>
//               <Text style={styles.textAuthor}>by {item.author}</Text>
//               <Text style={styles.rate}>${item.rate}</Text>
//               <View style={styles.buttonContainer}>
//                 <TouchableOpacity
//                   onPress={() => addItemToCart(item)}
//                   style={styles.button}>
//                   <Text style={styles.buttonText}>Add to cart</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         )}
//         horizontal={false}
//         numColumns={2}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   rate: {
//     color: 'black',
//     fontSize: 18,
//   },

//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   bookItemContainer: {
//     flexDirection: 'row',
//     padding: 10,
//   },
//   thumbnail: {
//     width: 100,
//     height: 150,
//   },
//   bookItemMetaContainer: {
//     padding: 5,
//     paddingLeft: 10,
//   },
//   textTitle: {
//     fontSize: 25,
//     fontWeight: '400',
//   },
//   textAuthor: {
//     fontSize: 16,
//     color: '#3b3b3b',
//   },
//   buttonContainer: {
//     position: 'absolute',
//     top: 110,
//     left: 10,
//   },
//   button: {
//     borderRadius: 8,
//     backgroundColor: '#24a0ed',
//     padding: 5,
//   },
//   buttonText: {
//     fontSize: 22,
//     color: '#fff',
//   },
// });

//Product Page
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/CartItem';
import { books } from '../Data';

export default function Example() {
  const dispatch = useDispatch();
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item });

  return (
    <>

      <ScrollView nestedScrollEnabled={true} >
        <View >
          <Text style={{ backgroundColor: 'black', textAlign: 'center', color: '#FFFFFF', height: 45, fontSize: 21, paddingVertical: 2 }} >2720 &nbsp;
            <Text style={{ fontSize: 15, color: "#f8f8ff", fontWeight: '500' }}>PRODUCTS FOUND
            </Text>
          </Text>
        </View>
        {/* Grid Method */}
        <FlatGrid
          itemDimension={120}
          data={books}
          style={[styles.gridView, { marginTop: -10 }]}
          spacing={15}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: "#F5F5F5", marginLeft: '-2%' }]}>
              <TouchableOpacity
                onPress={() => addItemToCart(item)}>
                <Image source={{ uri: item.imgUrl }} style={styles.thumbnail}
                />
                {/*End of Grid Method*/}
                <MaterialIcons name="filter-none" size={25} style={styles.text} />

              </TouchableOpacity>

              <AntDesign name="hearto" size={25} style={styles.wishlist} />

              <Text style={styles.itemName}>{item.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.itemRate}>{'\u20B9'} {item.rate}&nbsp;&nbsp;&nbsp;</Text>
                <Text style={styles.itemChangeRate}>{'\u20B9'}{item.changerate}</Text>
                <Text style={styles.itemDiscount}>&nbsp;&nbsp;&nbsp;{item.discount}</Text>

              </View>

            </View>

          )}
        />
      </ScrollView>
      <View style={styles.bottomView} >
        <Text style={styles.textStyleLeft}>SORT
        </Text>

        <Text style={styles.textStyleRight}>FILTER
        </Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {

    borderRadius: 5,
  },
  itemName: {
    fontSize: 12.5,
    color: '#585858',
    fontWeight: '600',
  },
  itemRate: {
    fontSize: 15.5,
    color: '#080808',
    fontWeight: 'bold',
  },
  itemChangeRate: {
    textDecorationLine: 'line-through',

    fontSize: 15,
    fontWeight: '700',
    color: '#808080'
  },
  itemDiscount: {
    color: '#FF4500',
    fontWeight: '700',

  },
  thumbnail: {
    width: '104%',
    height: 300,

  },
  wishlist: {
    position: 'absolute',
    top: 15,
    right: 16,
    color: '#585858'
  },
  text: {
    position: 'absolute',
    top: 12,
    left: 16,
    color: '#909090'
  },

  bottomView: {

    width: '100%',
    height: 40,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-around',

    position: 'absolute',
    bottom: 0,
    paddingVertical: 5,
    flexDirection: 'row'
  },

  textStyleLeft: {

    color: '#080808',
    fontSize: 17,
    fontWeight: '600',
    left: 2,
    alignContent: 'center'
  },

  textStyleRight: {

    color: '#080808',
    fontSize: 17,
    fontWeight: '600',
    left: -12
  }
});
