import  React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default class Pet extends Component {

  render () {
        return (

          <View style= {styles.body}>
           <Text style={styles.petb}> PetBest
          </Text>
          <ScrollView> 
          <View style={styles.quadrado1}>
          </View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado3}></View>
        
          </ScrollView>
           <Text style={styles.footer}> Allan Aurelio
          </Text>


      </View>
        );
    }
}    

const styles = StyleSheet.create ({

    body:{
        paddingTop: 20,
        flex:1
    },
    quadrado1:{
      backgroundColor: '#B0E0E6	',
      height:400

    },
    quadrado2:{
      backgroundColor:'#F4A460',
      height:400
    },
    quadrado3:{
      backgroundColor:'#FFB6C1',
      height:400

 },
    petb:{
      fontSize:60,
      paddingLeft:55,
      backgroundColor:'#B0E0E6'
      
    },
  footer:{
    backgroundColor: 'white',
    fontSize:30,
    paddingLeft:80
  
  },
   
   })