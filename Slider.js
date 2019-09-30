import React, {Component} from 'react';
import {View, StyleSheet, Text, Slider} from 'react-native';

export default class PrimeiroProjeto extends Component {

    constructor(props){
      super(props)
      this.state={
        valor:50
      }
    }

    render (){

      return (
          <View style= {styles.body}>

          <Slider minimumTrackTintColor="red" maximumTrackTintColor="blue"  value={this.state.valor} minimumValue={0} maximumValue={100} onValueChange={(v)=>this.setState({valor:v})}/>
          <Text>{this.state.valor.toFixed(2)} % </Text>
    
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