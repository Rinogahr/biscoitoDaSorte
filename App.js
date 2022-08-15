import React, { useState } from "react";
import Frases from "./frases/frases.js";
import 
{
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";


function App() {

  const [biscoitoImg, setBiscoitoImg] = useState(require("./img/biscoito.png"));
  const [txtMotivacional, setTxtMotivacional] = useState("");
  return(
    <ImageBackground source={require("./img/bgBiscoito.jpg")} style={myStyles.bgImg}>
        
        <View style={myStyles.viewContainer}>
          
          <View style={myStyles.viewFotoContainer}>
            <View style={myStyles.viweContainerImg}>
              <Image source={biscoitoImg} style={myStyles.biscoitoImg}/>
            </View>
          </View>

          <View style={myStyles.viewTxtMotvContainer}>
            <View style={myStyles.viewTxt}>
              <Text style={myStyles.txtMotivacional}>{txtMotivacional}</Text>
            </View>
          </View>
          
          <View style={myStyles.viewQuebrarBiscoito}>
              <TouchableOpacity style={myStyles.touchButton} onPress={quebrarBiscoito}>
                <Text style={myStyles.touchTxt}>Quebre o biscoito !</Text>
              </TouchableOpacity>
          </View>

          <View style={myStyles.viewTouchRefresh}>
              <TouchableOpacity style={myStyles.touchRefreshButton} onPress={resetar}>
                <Image source={require("./img/refresh.png")} style={myStyles.touchRefreshImg}/>
                <Text style={myStyles.touchTxtRfresh}>Resetar</Text>
              </TouchableOpacity>
          </View>
        
        </View>

    </ImageBackground>
  );

  function quebrarBiscoito(){
    setBiscoitoImg(require("./img/biscoitoAberto.png"));
    gerarTextoRandomico();
  }

  function gerarTextoRandomico(){
      const e = Math.floor(Math.random() * Frases.length );
      // console.log('e >> ', e);
      setTxtMotivacional(Frases[e].name);
  }

  function resetar(){
    setBiscoitoImg(require("./img/biscoito.png"));
    setTxtMotivacional("");
  }
}

const myStyles = StyleSheet.create({
  bgImg:{
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center'
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewFotoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viweContainerImg:{
    backgroundColor: '#cecece93',
    borderRadius: 8,
    marginTop: 100,
    
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  biscoitoImg:{
    width: 200,
    height: 200,
    
  },
  viewTxtMotvContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewQuebrarBiscoito: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchButton: {
   borderColor: '#ff00d4',
   borderWidth: 2,
   borderRadius: 10,
   width: 250,
   padding: 10,
   alignItems: 'center',
   backgroundColor: '#ffffff77',

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  touchTxt:{
    fontSize: 15,
    fontWeight: '500',
    color: '#000000'
  },
  txtMotivacional:{
    fontSize: 25,
    fontWeight: '900',
    color: "#000"
  },
  viewButtonContainr: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewTouchRefresh: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 410
  },
  touchRefreshButton:{
    marginRight: 15,
    alignItems: 'center'
  },
  touchRefreshImg: {
    width: 35,
    height: 35
  },
  touchTxtRfresh:{
    fontSize: 15,
    fontWeight: '600',
    color: '#000'
  },
})
export default App