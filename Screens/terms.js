import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native'
import CollapsibleView from "react-native-collapsible-container";

const Terms = () => {
    //INIT MENU VISIBILITY
    const [tandc, settandc] = useState(true);
    const [offerterms, setofferterms] = useState(false);
    const [membership, setmembership] = useState(false);

    function fntandc(){
        settandc ( true )
        setofferterms ( false )
        setmembership ( false )

    }
    function fnofferterms(){
        settandc ( false )
        setofferterms ( true )
        setmembership ( false )
    }
    function fnmembership(){
        settandc ( false )
        setofferterms ( false )
        setmembership ( true )
    }

    // onPress={() => settandc(!tandc)}

    const Headerbar = () => {
        return(
            <ScrollView  horizontal={true}> 
                <TouchableOpacity onPress={() => fntandc()}>
                     <Text style={styles.menuText}>TERMS & CONDITIONS OF USE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => fnofferterms()}>
                     <Text style={styles.menuText}>OFFER TERMS & CONDITIONS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => fnmembership()}> 
                     <Text style={styles.menuText}>TERMS & CONDITIONS OF MEMBERSHIP PROGRAM</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }


    return (
        <View>
           <Headerbar />
        {tandc ?
                (
                    <ScrollView>
                        <CollapsibleView title="Terms and Conditions of use">
                                <Text>{lorem}</Text>
                        </CollapsibleView>
                        <CollapsibleView title="Privacy">
                             <Text>{lorem}</Text>
                        </CollapsibleView>
                        <CollapsibleView title="General">
                             <Text>{lorem}</Text>
                        </CollapsibleView>
                        <CollapsibleView title="Monitoring">
                             <Text>{lorem}</Text>
                        </CollapsibleView>
                        <CollapsibleView title="Business">
                             <Text>{lorem}</Text>
                        </CollapsibleView>
                        <CollapsibleView title="Disclaimer">
                             <Text>{lorem}</Text>
                        </CollapsibleView>
                        <View style={{height:50}}/>
                    </ScrollView>
                    
                //code
                ) : null}
        {membership ?
                (
                    <ScrollView>
                   
                    <CollapsibleView title="Monitoring">
                         <Text>{lorem}</Text>
                    </CollapsibleView>
                    <CollapsibleView title="Business">
                         <Text>{lorem}</Text>
                    </CollapsibleView>
                    <CollapsibleView title="Disclaimer">
                         <Text>{lorem}</Text>
                    </CollapsibleView>
                    <View style={{height:50}}/>
                </ScrollView>
                //code
                ) : null}
         {offerterms ?
                (
                    <ScrollView>
                    
                    <CollapsibleView title="Business">
                         <Text>{lorem}</Text>
                    </CollapsibleView>
                    <CollapsibleView title="Disclaimer">
                         <Text>{lorem}</Text>
                    </CollapsibleView>
                    <View style={{height:50}}/>
                </ScrollView>
                //code
                ) : null}
                
            
        </View>
    )
}

export default Terms

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu enim sit amet ante placerat rhoncus nec quis metus. Ut consequat maximus turpis, in commodo quam commodo et. Etiam lobortis porta dictum. Aliquam tristique tellus rutrum eros ultrices, quis aliquet lorem sodales. Proin id eros magna. Praesent tempus tincidunt semper. Aenean mattis pretium metus sit amet lacinia. Maecenas aliquam ullamcorper lorem in sagittis. Vivamus ut laoreet mi. Aliquam in velit consectetur'

const styles = StyleSheet.create({
    menuText:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 30
    }
})
