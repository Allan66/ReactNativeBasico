//Mudanças de States aleatórios
import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
export class Raca extends Component{
  constructor(props){
    super(props);
    this.state = {racas:''};
    var racas = ['Cachorro', 'Gato', 'Pato', 'Ornintorrinco', 'Leão'];
    setInterval(() => {this.setState(previousState =>{
      var n = Math.floor(Math.random() * racas.length)
      return ({racas:racas[n]}

      );
    } )},1000)
  }

  render(){
    return(
      <View> 
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:30, color:'blue'}}> O seu pet é um: </Text>
      <Text style={{textAlign:'center', marginTop:200, fontSize:40, color:'green'}}> {this.state.racas}</Text>
      </View>
    );
  }
}

export default class PrimeiroProjeto extends Component {


    constructor(props){
      super(props);
      this.state={
       
      }
    }


    render (){

      return (
          <View style= {styles.body}>
          <Raca/>
       
          </View>
      )  
    
    }  
}

const styles = StyleSheet.create ({

    body:{
        paddingTop: 20,
        flex:1
    },
});