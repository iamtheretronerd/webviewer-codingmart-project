import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image, Pressable } from 'react-native'
import landingCont from '../JSON/StatusContainer/landingcont'
import { useNavigation } from '@react-navigation/native';


const IconsLayout = (props) => {
    const navigation = useNavigation(); 
    function clickednow(id){
        
        if( id == "1"){
            navigation.replace('TableScreen')
        }
        if(id=="2"){
            navigation.replace('')
        }
    }
    
    return (
        <View>
                        <View  style={styles.statusContainer}>
                            <ScrollView  horizontal={true}> 
                            {landingCont.map(datas => (
                                    <View>
                                        <Pressable onPress={() => clickednow(datas.id)}>
                                             <Image style={styles.imageSizeStatus} source={{uri: datas.url}}  />
                                        </Pressable>
                                        
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
