import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Image} from 'react-native';

class Botao extends Component {
constructor(props){
  super(props);
  this.state={};
  this.styles = StyleSheet.create({
    botao:{
      width:250,
      height:50,
      borderWidth:2,
      borderColor:props.color,
      borderRadius:25,
      backgroundColor:'transparent'
    },
    botaoArea:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    botaoText:{
      color:props.color,
      fontSize:16,
      fontWeight:'bold'
    },

  });
}


  render(){
    return(
      <TouchableOpacity style={this.styles.botao}onPress={this.props.aoClicar} >
  <View style={this.styles.botaoArea}>
<Text style={this.styles.botaoText}>{this.props.text}</Text>
  </View>
      </TouchableOpacity>
    );
  }
}
export default class Biscoito extends Component {
  constructor(props){
    super(props);
    this.state ={texto:'algogum textp'}
    this.frases = ['Sem frases para você.', 'Hoje a sorte não está do seu lado.','Um dia de chuva, tudo fica molhado', 'Pedra dura em agua mole... esqueci', 'Quem com ferro fere é muito doido', 'Bota na conta do irineu, se ele nao pagar, nem eu','A vida é uma caixinha de supresas... RUINS', 'Talez a luz no fim do tunel nunca chegue', 'Sera que vale a mesmo a pena vive?', 'Enquanto você chora por ela, ela continua te chifrando', 'tu é muito gado', 'muuuu', 'Ja pensou qual tipo de corno você é hoje?', 'Não tenha preconceitos, odeie todo mundo igualmente','A Larissa é corna sim', 'Um homem sem chifre é um animal indefeso','Uma mulher sem chifres é um animal indefeso']
  }

quebrarBiscoito(){

}
  render (){
    return (
      <View style= {styles.body}> 
      <Image source={require('./cookie.png')}/>
      <Text style={styles.texto}> {this.state.texto} </Text>
      <Botao color="#b59619" text="Quebrar Biscoito" aoClicar={this.quebrarBiscoito}/>
      </View>
    );
  }
    
}
  
 


const styles = StyleSheet.create({

   body:{
     paddingTop:20,
     flex:1,
     justifyContent:'center',
     alignItems:'center' 
   },
   texto:{
     fontSize:17,
     margin:30,
     color:'#b59619',
     fontStyle:'italic',
     textAlign:'center'

   },
});
