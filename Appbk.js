import React, { useState } from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";



function App(){
  const [ img, setImg ] = useState(require('./img/biscoito.png'));
  
  return(
    <View style={styles.container}>
      
      <Image
        source={img}
        style={styles.img}/>

      <Text style={styles.txtFraze}>" Minha Primeira Frase do Biscoito "</Text>

      <TouchableOpacity style={styles.bt} onPress={quebrarBiscoito}>
        <View style={styles.btContainer}>
          <Text style={styles.btTxt}>Quebre o Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.bt,styles.bt2]} onPress={reset}>
        <View style={styles.btContainer}>
          <Text style={[styles.btTxt,styles.btTxt2]}>Resetar</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
  
  function quebrarBiscoito(){
    setImg(require('./img/biscoitoAberto.png'));
  }
  
  function reset(){
    alert('Resetando')
  }
}

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