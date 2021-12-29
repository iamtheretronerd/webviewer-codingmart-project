import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-web-swiper';
import swiperCount from '../JSON/StatusContainer/swipercount';

const SwiperLayout = () => {
    return (
        
            <View style={styles.container}>
                <Swiper>
                {swiperCount.map(datas => (
                    <View >
                    <Image style={styles.imageSizeSlider} source={{uri: datas.url}}  />
                    </View>
                ))}

                </Swiper>
            </View>
      
    )
}

export default SwiperLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      imageSizeSlider:{
        width:'100%',
        height: '95%',
    },
})
