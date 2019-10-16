import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class PrimeiroProjeto extends Component {
  constructor(props) {
    super(props);
    this.state = { usuario: '' };
    this.usuarioNome = this.usuarioNome.bind(this);
  }
  usuarioNome(u) {
    let s = this.state;
    if (u.length > 0){
      s.usuario = 'Seja bem vindo, '+u;
    }   
    else{
      s.usuario = ''
    }
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Qual seu nome?"
          onChangeText={this.usuarioNome}
        />
        <Text style={{ fontSize: 15, padding: 10 }}> {this.state.usuario}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    padding: 10,
    borderRadius: 10,
  },
});
