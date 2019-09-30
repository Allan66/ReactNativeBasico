import React, {Component} from 'react';
import {View, StyleSheet, Text, Picker} from 'react-native';

export default class PrimeiroProjeto extends Component {


constructor (props){
  super(props);
    this.state={servico:0,
                servicos:[
                    {nome:'Tosa', valor:'15'},
                    {nome:'Banho', valor:'20'},
                    {nome:'Passeio', valor:'10'},
                    {nome:'Petisco', valor:'5'},
                    {nome:'Briquedo',valor:'15'}
                ]
      }
}

    render (){

      let servicosItems = this.state.servicos.map((v,k) => {
          return <Picker.Item key={k} value={k} label={v.nome}/>
      });
        return (
          <View style= {styles.body}>
          <Text style={styles.logo}> PetBest </Text>
          <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex)=>this.setState({servico:itemValue})}>
            {servicosItems}
        
         
                  </Picker>
                  <Text style={styles.preco}>R$: {this.state.servicos[this.state.servico].valor},00 </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create ({

    body:{
        paddingTop: 20,
        flex:1
    },
    logo:{
      fontSize:30,
      textAlign:'center',
      marginBottom:20
    },
    preco:{
      fontSize:40,
      textAlign:'center',
      backgroundColor:'#7FFFD4'
    }
   
});