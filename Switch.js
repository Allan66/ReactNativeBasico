import React, {Component} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';

export default class PrimeiroProjeto extends Component {


    constructor(props){
      super(props);
      this.state={
        valor:false
      }
    }


    render (){

      return (
          <View style= {styles.body}>

        <Switch thumbTintColor="blue" onTintColor="red" value={this.state.valor} onValueChange={(v)=>this.setState({valor:v})}/>
          <Text>{(this.state.valor)? "Selecionado":"Não selecionado"}   </Text>
          </View>
      )  
      // "?" se ":"case
    }  
}

const styles = StyleSheet.create ({

    body:{
        paddingTop: 20,
        flex:1
    },
});