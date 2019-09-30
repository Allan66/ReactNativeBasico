import React, {Component} from 'react';
import {View, StyleSheet, Text,SectionList} from 'react-native';

export default class PrimeiroProjeto extends Component {

  constructor (props){
    super (props);
     this.state={
       lojaData:[
         {title:'Loja 1',data:[
           {key:'1', servico:'Tosa', valor:'20' }
         ]},
         {title:'Loja 2', data:[
           {key:'2', servico:'Veterinario', valor:'60'},
           {key:'3', servico:'Passeio', valor:'15'},
           {key:'4', servico:'Tosa', valor:'25'}
         ]},
         {title:'Loja3', data:[
           {key:'5', servico:'Petisco', valor:'15'}
         ]}
       ]
     }
  }
      sRender(item){
        return(
          <Text style={styles.item}> {item.servico} - {item.valor},00R$ </Text>
        );
      }

      sectionRender(section){
        return(
          <Text style={styles.section}> {section.title} - Serviços </Text>
        )

      }
    render (){
        return (
          <View style= {styles.body}>
          <SectionList sections={this.state.lojaData} renderItem={({item})=>this.sRender(item)}
          renderSectionHeader={({section})=>this.sectionRender(section)}/>
              

          </View>
        );
    }
}

const styles = StyleSheet.create ({

    body:{
        paddingTop: 20,
        flex:1
    },

    item:{
      fontSize:14,
      padding:10,
      backgroundColor:'#DEB887'

    },
    section:{
      fontSize:25,
      backgroundColor:'#7FFFD4',
      
    }
   
});
//Rolagem encosta section