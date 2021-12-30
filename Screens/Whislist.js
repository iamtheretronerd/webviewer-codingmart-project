import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {books} from '../Data';
import {useDispatch} from 'react-redux';
import {ADD_TO_WHISLIST} from '../redux/CartItem';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  function Separator() {
    return (
      <View style={{borderBottomWidth: 1, borderBottomColor: '#a9a9a9'}} />
    );
  }
  const cartItem = useSelector(state => state);
  let newwhislist = cartItem.slice(0);
  newwhislist = newwhislist.filter(wl => wl.whislist === true);
  console.log(newwhislist);
  //const dispatch = useDispatch();
  // const addItemToWhislist = item =>
  //   dispatch({type: ADD_TO_WHISLIST, payload: item});
  return (
    <View style={styles.container}>
      {/* {whislist.length !== 0 ? ( */}
      <FlatList
        data={newwhislist}
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
                {/* <TouchableOpacity
                  onPress={() => addItemToWhislist(item)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Add to whislist</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        )}
      />
      {/* ) : (
        <View>{Alert.alert('Empty Whislist')}</View>
      )} */}
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
