import React, {Component} from 'react';
import {View, StyleSheet,Text, Platform} from 'react-native';

export default class PrimeiroProjeto extends Component {
     
    render (){
        return (
          <View style= {styles.body}>
          <Text style={styles.plataforma}> Meu sistema é {Platform.OS}, versão: {Platform.Version}</Text>

              
          </View>
        );
    }
}

const styles = StyleSheet.create ({

    body:{
        paddingTop: 20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    plataforma:Platform.select({
      ios:{
        fontSize:20,
        backgroundColor:'red'
      },
      android:{
        fontSize:20,
        backgroundColor:'blue'
      }
    })
   
});