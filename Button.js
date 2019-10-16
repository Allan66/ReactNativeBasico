import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Alert, TextInput } from 'react-native';

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {inputTexto:'',texto:''}
    this.apertouBotao = this.apertouBotao.bind(this);
}
  
  apertouBotao(){
    let s = this.state
    s.texto = 'Olá, ' + s.inputTexto;
    this.setState(s);
  }

  render() {
    return (
      <View style={{paddingTop:30}}>
      <TextInput style={styles.input} placeholder ="Qual seu nome?" onChangeText = {(inputTexto) => this.setState({inputTexto})} />
      <Button  title="Botão" onPress={this.apertouBotao}/>
      <Text> {this.state.texto} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    padding: 10,
    borderRadius: 10,
    marginBottom:10
  },
});
