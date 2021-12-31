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
import {ADD_TO_WHISLIST,REMOVE_FROM_WHISLIST} from '../redux/CartItem';
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
  const dispatch = useDispatch();
  const removeWhislist = item =>
    dispatch({
      type: REMOVE_FROM_WHISLIST,
      payload: item,
    });
  let newwhislist = cartItem.slice(0);
  newwhislist = newwhislist.filter(wl => wl.whislist === true);
  console.log(newwhislist);

  return (
    <View style={styles.container}>
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
                <TouchableOpacity
                  onPress={() => removeWhislist(item)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Remove</Text>
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
    fontSize: 20,
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
