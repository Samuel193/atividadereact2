import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'

export default function App (){

  var [totalReal, setTotalReal] = useState('');
  var [dollar, setDollar] = useState('');
  var [cotacao, setCotacao] = useState('');
  
  
  function Calcula (){
    dollar = parseFloat(totalReal) / parseFloat(cotacao);

    alert("O total em Dollar sera: "+ dollar)
   
   }

    return (
      <ImageBackground style={styles.imagem}
        source= {{
          uri:  
          'https://www.parmais.com.br/wp-content/uploads/Dolar-vs-Real-Destaque-5.png'
         
        }} >
      
       
          <Text style={styles.titulo}>Conversor</Text>
          <Text style={styles.subtitulo}> Converta Dollar em Real</Text>

          <TextInput 
            style={styles.campo}
            onChangeText={(totalReal) => setTotalReal(totalReal)}
            placeholder = "Total em Reais"
            keyboardType = "numeric"
            />

          <TextInput
            style={styles.campo}
            onChangeText={(cotacao) => setCotacao(cotacao)}
            placeholder = "Digite a cotacao em Dollar U$"
            keyboardType = "numeric"
            />

          <TouchableOpacity style={styles.button} onPress={Calcula} 
          >
            <Text 
            style={styles.textButton}>  Calcular </Text>
            
          </TouchableOpacity>

         
         
          <Text style={{
            color:'#fff', 
            fontSize: 30,
            fontWeight: 'bold'}}></Text>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({

    imagem:{
      
      width:"100%", 
      height:"100%",
      justifyContent: 'center',
      alignItems: 'center'
    },

    titulo:{
      color:'#000000', 
      fontSize: 30,
      fontWeight: 'bold'

    },
    subtitulo:{
      color:'#000000', 
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    campo:{
         
      backgroundColor:'#fff', 
      width: '90%',
      marginVertical: 10
    },
    button:{
      
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15,
      backgroundColor: '#FFD700',
      padding: 10,
      fontWeight: 'bold'
    },
    textButton:{
      
      justifyContent: 'center',
      color: '#000000'
    }

})
  //require('./img.jpg')