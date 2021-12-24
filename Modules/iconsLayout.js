import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import landingCont from '../JSON/StatusContainer/landingcont'

const IconsLayout = (props) => {

    return (
        <View>
                        <View  style={styles.statusContainer}>
                            <ScrollView  horizontal={true}> 
                            {landingCont.map(datas => (
                                    <View>
                                        <Image style={styles.imageSizeStatus} source={{uri: datas.url}}  />
                                        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 16, color: 'black'}}>{datas.name}</Text>
                                    </View>
                            ))}
                            </ScrollView>
                        </View>

        </View>
    )
}

export default IconsLayout

const styles = StyleSheet.create({
    statusContainer:{
        width: '100%',
    },
    imageSizeStatus:{
        width:80,
        height: 80,
        marginHorizontal: 5,
        borderRadius: 400/ 2
    },
})
