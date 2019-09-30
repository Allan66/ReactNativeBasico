import React, {Component} from 'react';
import {View, StyleSheet,FlatList, Text} from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor (props){
        super(props);
        this.state ={
            estabelecimentos:[

            {key:'1', nome:'PetShop', end:'Rua1'},
            {key:'2', nome:'ShopPet', end:'av. 1'},
            {key:'3',nome:'PetPet', end:'av.2'},
            {key:'3',nome:'Shop Shop', end:'alameda3'},
            {key:'1', nome:'PetShop', end:'Rua1'},
            {key:'2', nome:'ShopPet', end:'av. 1'},
            {key:'3',nome:'PetPet', end:'av.2'},
            {key:'3',nome:'Shop Shop', end:'alameda3'},
            {key:'1', nome:'PetShop', end:'Rua1'},
            {key:'2', nome:'ShopPet', end:'av. 1'},
            {key:'3',nome:'PetPet', end:'av.2'},
            {key:'3',nome:'Shop Shop', end:'alameda3'},
            {key:'1', nome:'PetShop', end:'Rua1'},
            {key:'2', nome:'ShopPet', end:'av. 1'},
            {key:'3',nome:'PetPet', end:'av.2'},
            {key:'3',nome:'Shop Shop', end:'alameda3'},
            
           ]

    };
        
    }
    flatRender(item){
        return(
            <View style={styles.flatItem}>
            <Text style={styles.flatNome}>{item.type}  {item.nome}</Text>
            <Text style={styles.ende}>{item.end} </Text>
        </View>
    );
}
    render (){
        return (
          <View style= {styles.body}>
              <FlatList data ={this.state.estabelecimentos} renderItem={({item}) => this.flatRender(item)}/>
             

          </View>
        );
    }
}

const styles = StyleSheet.create ({

    body:{
        paddingTop: 20,
        flex:1
    },
    flatItem:{
        frontSize:19,
        paddingt:10,
	
	},
	flatNome:{
		fontSize:26,
    paddingLeft:0
	},
	ende:{
		fontSize:14
	}
});