import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';

function Whislistheader() {
  const navigation = useNavigation();
  const whislist = useSelector(state => state);
  let newwhislist = whislist.slice(0);
  newwhislist = newwhislist.filter(wl => wl.whislist === true);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CartScreen')}
      style={styles.button}>
      {/* <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{newwhislist.length}</Text>
      </View> */}
      <Icon name="shopping-cart" size={32} color="#101010" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
  itemCountContainer: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Whislistheader;
