import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  BackHandler,
  Alert,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WebView} from 'react-native-webview';
import DoubleTapToClose from './close';
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import NavBar from '../Modules/NavBar';

var delayInMilliseconds = 5000; //1 second

const MainScreen = ({route, navigation}) => {

  useEffect(() => {
    GoogleSignin.configure({
        webClientId: '566489472256-3cljtd1ta3tf9nnu6toef72t810fpe02.apps.googleusercontent.com'
      });
})

const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      alert(JSON.stringify(userInfo))
    //   this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          alert("1:"+error.code)
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        alert("2:"+error.code)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert("3:"+error.code)
      } else {
        // some other error happened
        alert("4:"+error.code)
      }
    }
  };




  const {addressdata} = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const Error = ({reload}) => {
    return (
      <View>
        {/* <View style={styles.navbar}>
            <View style={{ flexDirection:"row"}}>
                <Image style={styles.imageSize3} source={require('../Images/logo.png')}  />
                <Text style={styles.labelstyle}>FactoryWorkx</Text>
            </View>
            </View> */}
        <View style={styles.loadingWrapper}>
          <Image
            style={styles.imageSize2}
            source={require('../Images/network-error.png')}
          />
          <Text style={styles.network}>Network Error</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.buttonStyle}>
              <Button
                onPress={() => {
                  navigation.replace('Settings');
                }}
                title="retry"
                color="#841584"
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                onPress={() => {
                  BackHandler.exitApp();
                }}
                title="Exit"
                color="#841584"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  function LoadingIndicatorView() {
    return (
      <View style={styles.centerPage}>
        <Image
          style={styles.imageSize}
          source={require('../Images/logo.png')}
        />
      </View>
    );
  }
  const reload = () => webview.current.reload();

  let WebViewRef;

  let jsCode = `
        var cookie={};
        document.cookie.split('; ').forEach(function(i){cookie[i.split('=')[0]]=i.split('=')[1]});
        document.querySelector('#email').value=cookie['email'] || '';
        document.querySelector('#password').value=cookie['password'] || '';
        document.querySelector('#login button').onclick = function(){
            document.cookie = 'email='+document.querySelector('#email').value;
            document.cookie = 'password='+document.querySelector('#password').value;
        };
    `;

  return (
    <View style={styles.webvw}>
      <DoubleTapToClose />
      <NavBar />
      <WebView
        ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
        //Loading URL
        source={{uri: addressdata}}
        //Enable Javascript support
        javaScriptEnabled={true}
        //For the Cache
        domStorageEnabled={true}
        //View to show while loading the webpage
        renderLoading={LoadingIndicatorView}
        //Want to show the view or not
        startInLoadingState={true}
        sharedCookiesEnabled={true}
        injectedJavaScript={jsCode}
        renderError={() => <Error reload={reload} />}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  lineicon: {
    height: '35%',
    width: '2%',
    marginTop: '5%',
  },
  iconsection: {
    height: '40%',
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginLeft: '-4%',
  },
  icon: {
    marginLeft: '2%',
    marginTop: '5%',
    height: 40,
    width: 40,
    borderRadius: 10,
  },

  follow: {
    fontSize: 15,
    color: 'black',
    marginTop: '6%',
    marginLeft: '-5%',
  },
  name: {
    fontSize: 20,
    color: 'black',
    marginTop: '-7%',
    marginLeft: '-5%',
    marginBottom: '5%',
  },
  centerPage: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  menuText: {
    width: '50%',
  },
  imageSize: {
    marginTop: '35%',
    width: 200,
    height: 200,
  },
  navText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    marginTop: 18,
    marginLeft: '-10%',
    paddingTop: '4%',
  },
  labelstyle: {
    fontSize: 18,
    marginTop: 20,
    color: 'black',
    marginLeft: 15,
  },
  imageSize2: {
    marginTop: -100,
    width: 180,
    height: 180,
  },
  imageSize3: {
    marginLeft: 20,
    marginTop: 10,
    width: 50,
    height: 50,
  },
  imageSizeMenu: {
    marginLeft: '62%',
    marginTop: 15,
    width: 30,
    height: 30,
  },
  imageSizeClose: {
    marginLeft: '100%',
    marginTop: '2%',
    width: 20,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  webvw: {
    width: '100%',
    height: '100%',
  },
  navbar: {
    width: '100%',
    height: '10%',
    backgroundColor: 'white',
  },
  network: {
    marginHorizontal: 10,
    marginTop: 50,
    color: 'black',
    fontSize: 20,
  },
  loadingWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  modalView: {
    marginTop: '-4%',
    marginLeft: '-5%',
    backgroundColor: 'white',
    borderRadius: 0,
    height: '105%',
    width: '111%',
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonStyle: {
    marginHorizontal: 5,
    marginTop: 5,
    width: '30%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});