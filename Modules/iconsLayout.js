import React, { useEffect } from 'react'
import { StyleSheet, Text, View,ScrollView,Image, Pressable } from 'react-native'
import landingCont from '../JSON/StatusContainer/landingcont'
import { useNavigation } from '@react-navigation/native';
import landingAlt from '../JSON/StatusContainer/landingalt';


const IconsLayout = (props) => {

    let dyndat = landingCont;

    useEffect(() =>{
        
        run(props.jsonpas)
    })

    const navigation = useNavigation(); 
    
    function run(data){
        if(data == 1){
            dyndat = landingCont;
            // alert('one')
        }
        else if(data == 2){
            dyndat = landingAlt;
            alert('two')
        }
    }

    function clickednow(id){
        
        if( id == "1"){
            navigation.replace('TableScreen')
        }
        if(id=="2"){
            navigation.replace('Home')
        }
    }
    
    return (
        <View>
                        <View  style={styles.statusContainer}>
                            <ScrollView  horizontal={true}> 
                            {dyndat.map(datas => (
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
