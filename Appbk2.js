import React, {useState}  from "react";
import { View, StyleSheet, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import axios from "axios";

//https://positive-vibes-api.herokuapp.com/quotes/random


function App(){
  const [img, setImg] = useState(require("./img/biscoito.png"));
  const baseUrl = "//https://positive-vibes-api.herokuapp.com/quotes/random";
  const [frase, setFrase] = useState("");

  // axios({
  //   method: 'get',
  //   url: baseUrl,
  // }).then(( res ) => {
  //   console.log(res.data);
  // })

  return(
    <ImageBackground source={require("./img/bgBiscoito.jpg")} style={styles.container}>
      <View>
        <Image source={img} style={styles.img}/>
        <Text style={styles.txtTitle}>Bem vindo ao app Biscoito da sorte</Text>
        <TouchableOpacity style={styles.bt} onPress={quebrarBiscoito}>
          <View style={styles.btContainer}>
            <Text style={styles.btTxt}>Quebre o Biscoito</Text>
            <Text style={styles.btTxt}>{frase}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  function quebrarBiscoito(){
    setImg(require('./img/biscoitoAberto.png'));
    randonFrase();
  }
  function randonFrase(){
    
  };
  // function randonFrase(){
  //   fetch("https://positive-vibes-api.herokuapp.com/quotes/random")
  //   .then( (resposta) => { resposta.json() } )
  //   .then( ( json ) => console.log( json ) )
  //   .catch( ( error) => console.log(error) )
  // };
};



const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `#cecece`,
  },
  img: {
    width: 230,
    height: 230,
  },
  txtFraze:{
    fontSize: 20,
    color: "#87018b",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  bt:{
    width: 230,
    height: 50,
    borderColor: "#87018b",
    borderWidth: 2,
    borderRadius: 20
  },
  bt2:{ 
    marginTop: 15,
    borderColor: '#121212'
  },
  btContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btTxt:{
    fontSize: 15,
    fontWeight: '700',
    color: '#87018b'
  },
  btTxt2:{
    fontSize: 15,
    fontWeight: '700',
    color: '#121212'
  }
});


export default App;