import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image} from 'react-native';

export default class PrimeiroProjeto extends Component {

constructor(props){
  super(props);
  this.state={texto1:'', texto2:''}
  this.escrever = this.escrever.bind(this);
} 

mudarVogas(texto){
 let novoTexto = texto.toLowerCase();

novoTexto= novoTexto.replace(/a|e|i|o|u|/g, 'i');

 return novoTexto;
}
escrever(t){
 let s = this.state;
 s.texto1= t;
 s.texto2= this.mudarVogas(t);
 this.setState(s);
}


  
  render() {
    return (
      <View style={styles.body}>
      <View>
        <Text style={styles.titulo}> Criador de Memes </Text>
        <View style={styles.inputArea}>
          <TextInput style={styles.frase} placeholder="Digite sua frase!" onChangeText={this.escrever}/>
        </View>
      </View>
      <View style={styles.area}>

        <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
        <Image style={styles.menino}source={require('./menino.jpg')}/>
        <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  body:{
        backgroundColor:'#999999',
        padding:30,
        flex:1,
        flexDirection:'column',
        alignItems:'center'
  },
  titulo:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        textShadowColor:'black'
  },    
  frase:{
        borderWidth:1,
        borderColor:'#999999',
        backgroundColor:'#EEEEEE',
        height:40,
        margin:20,
        padding:10,
        

  },
  inputArea:{
      alignSelf:'stretch'
  },
  menino:{
    width:300,
    height:400,
    marginTop:-80,
    zIndex:0

  },
  area:{
    width:300,
    height:500

  },
  texto:{
    fontSize:25,
    color:'#FFFFFF',
    backgroundColor:'transparent',
    padding:10,
    fontWeight:'bold',
    textAlign:'center',
    height:70
  },
  texto1:{
    zIndex:1,

  },
  texto2:{
    zIndex:1,
    marginTop:-70

  },
});
