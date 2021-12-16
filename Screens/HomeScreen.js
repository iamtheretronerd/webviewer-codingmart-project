import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import Modal from 'react-native-modal';
import DoubleTapToClose from './close';
import NavBar from './navbar';

const HomeScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
          <NavBar />
             <DoubleTapToClose />
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
   
})
