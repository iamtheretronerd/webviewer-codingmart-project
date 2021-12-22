import React from 'react'
import { StyleSheet, Text, View, ScrollView,  TextInput, Image } from 'react-native'
import Swiper from 'react-native-web-swiper';

const LandingPage = () => {
    const [text, onChangeText] = React.useState("")
    return (
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <View style={styles.inputcontainer}>
                <View style={styles.innerinputcontainer}>
                  <TextInput
                        style={styles.input}
                        placeholder='Search'
                        onChangeText={onChangeText}
                        value={text}
                    />
                     <Image style={styles.imageSizeicon} source={require('../Images/search.png')}  />
                     <Image style={styles.imageSizeicon} source={require('../Images/camera.png')}  />
                </View>
            </View>
            {/* INPUT OVER */}
            <View  style={styles.statusContainer}>
                <ScrollView  horizontal={true}> 
                        <View>
                            <Image style={styles.imageSizeStatus} source={require('../Images/shirts.jpg')}  />
                            <Text style={{textAlign: 'center'}}>Shirt</Text>
                        </View>
                        <View>
                                <Image style={styles.imageSizeStatus} source={require('../Images/mask.jpg')}  />
                                <Text style={{textAlign: 'center'}}>Masks</Text>
                        </View>
                        <View>
                                <Image style={styles.imageSizeStatus} source={require('../Images/t-shirt.jpg')}  />
                                <Text style={{textAlign: 'center'}}>T- Shirt</Text>
                        </View>
                        <View>
                                <Image style={styles.imageSizeStatus} source={require('../Images/shoes.jpg')}  />
                                <Text style={{textAlign: 'center'}}>Shoes</Text>
                        </View>
                        <View>
                            <Image style={styles.imageSizeStatus} source={require('../Images/shirts.jpg')}  />
                            <Text style={{textAlign: 'center'}}>Shirt</Text>
                        </View>
                        <View>
                                <Image style={styles.imageSizeStatus} source={require('../Images/mask.jpg')}  />
                                <Text style={{textAlign: 'center'}}>Masks</Text>
                        </View>
                        <View>
                                <Image style={styles.imageSizeStatus} source={require('../Images/t-shirt.jpg')}  />
                                <Text style={{textAlign: 'center'}}>T- Shirt</Text>
                        </View>
                        <View>
                                <Image style={styles.imageSizeStatus} source={require('../Images/shoes.jpg')}  />
                                <Text style={{textAlign: 'center'}}>Shoes</Text>
                        </View>
               
                </ScrollView>
            </View>
            {/* STATUS OVER */}
            <View style={styles.container}>
                <Swiper>
                    <View >
                    <Image style={styles.imageSizeSlider} source={require('../Images/slider-1.png')}  />
                    </View>
                    <View >
                        <Image style={styles.imageSizeSlider} source={require('../Images/slider-1.png')}  />
                    </View>
                    <View >
                        <Image style={styles.imageSizeSlider} source={require('../Images/slider-1.png')}  />
                    </View>
                </Swiper>
            </View>

        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#eeeeee',
        width: '73%'
    },
    inputcontainer:{
        paddingVertical: 10,
        paddingHorizontal:10,
        width: '100%',
        flexDirection: 'row',
    },
    innerinputcontainer:{
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        paddingTop: 8,
    },
    imageSizeicon:{
        width:40,
        height: 40,
        marginHorizontal: 5
    },
    statusContainer:{
        width: '100%',
        height: '15%',
       
    },
    imageSizeSlider:{
        width:'100%',
        height: '95%',
    },
    imageSizeStatus:{
        width:80,
        height: 80,
        marginHorizontal: 5,
        borderRadius: 400/ 2
    },
    container: {
        flex: 1,
      },

      
})
