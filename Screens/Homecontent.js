import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from 'react-native';
function Homecontent() {
    return (
       
            {data.map(datas => (
          <View style={styles.products}>
            <View>
              <Image
                style={styles.productimage}
                source={require('../Images/shirt.jpg')}
              />
            </View>
            <View>
              <Text style={styles.producttile}>{datas.name}</Text>
            </View>
            <View>
              <Text style={styles.productdescription}>{datas.description}</Text>
            </View>
            <View style={styles.rate}>
              <Text style={styles.rate1}>
                <FontAwesome name="rupee" size={18} /> 975
              </Text>
              <Text style={styles.rate2}>
                <FontAwesome name="rupee" size={18} /> 1499
              </Text>
              <Text style={styles.rate3}>35% Off</Text>
            </View>
            <View style={styles.productsizesection}>
              <Text style={styles.size}>Size</Text>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="S" value="S" />
                <Picker.Item label="M" value="M" />
                <Picker.Item label="L" value="L" />
                <Picker.Item label="XL" value="XLL" />
              </Picker>
            </View>
            <View style={styles.productsizesection2}>
              <Text style={styles.size}>Qty</Text>
              <Picker
                selectedValue={selectedqty}
                style={styles.picker2}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedqty(itemValue)
                }>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
              </Picker>
            </View>
            <View>
              <Text style={styles.delivery}>Free Delivery by 14th july</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.removebtn}>
                <AntDesign name="delete" size={15} />
                <Text style={{color: 'black'}}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.whistlist}>
                <AntDesign name="hearto" size={15} />
                <Text style={{color: 'black'}}>Move to Whistlist</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
        
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
  whistlist: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    paddingTop: 2,
    height: '25%',
    width: '48%',
    marginTop: '-6.5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '50%',
  },
  removebtn: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    height: '25%',
    width: '50%',
    marginTop: '8%',
    marginLeft: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  delivery: {
    marginLeft: '40%',
    color: '#757775',
    marginTop: '-5%',
  },
  picker2: {
    marginLeft: '-2%',
    marginTop: '-34%',
    width: '20%',
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    marginLeft: '-5%',
    marginTop: '-34%',
    width: '20%',
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productsizesection: {
    flexDirection: 'row',
  },
  productsizesection2: {
    flexDirection: 'row',
    marginLeft: '40%',
    marginTop: '-8%',
  },
  size: {
    fontSize: 15,
    marginLeft: '40%',
    color: 'black',
    marginTop: '-20%',
  },
  productsize: {
    width: '8%',
  },
  rate3: {
    fontSize: 20,
    paddingLeft: '2%',
    color: 'red',
    marginTop: '-30%',
  },
  rate2: {
    fontSize: 20,
    paddingLeft: '2%',
    color: '#878687',
    marginTop: '-30%',
    textDecorationLine: 'line-through',
  },
  rate1: {
    fontSize: 20,
    marginLeft: '40%',
    color: 'black',
    marginTop: '-30%',
  },
  rate: {
    flexDirection: 'row',
  },
  productdescription: {
    fontSize: 15,
    marginLeft: '40%',
    color: 'black',
    marginTop: '-35%',
  },
  producttile: {
    fontSize: 18,
    marginTop: '-40%',
    marginLeft: '40%',
    color: '#878687',
  },
  productimage: {
    height: '80%',
    width: '25%',
    marginLeft: '10%',
    marginTop: '4%',
  },
  products: {
    marginTop: '5%',
    height: '30%',
    backgroundColor: 'lightgray',
    width: '100%',
  },
  //offers
  showmore: {
    marginLeft: '11%',
    fontSize: 18,
    paddingTop: 4,
    color: 'black',
    textDecorationLine: 'underline',
    cursor: 'pointer',
  },
  offtitle: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 3,
  },
  offers: {
    padding: 3,
    paddingLeft: 10,
    marginTop: '3%',
    height: '16%',
    backgroundColor: 'white',
    width: '100%',
  },
  // header
  button: {
    backgroundColor: 'white',
    marginLeft: '63%',
    marginRight: '4%',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: '-7%',
    padding: 3,
    cursor: 'pointer',
  },
  address: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  header: {
    marginTop: '3%',
    height: '8%',
    backgroundColor: 'white',
    width: '100%',
  },
  screen: {
    height: '100%',
    backgroundColor: '#F0F1F2',
  },})
export default Homecontent
