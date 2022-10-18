import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { Link } from "@react-navigation/native";

export default function Registration({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return (

        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.h1}>Bem Vindo</Text>
            <Text style={styles.h2}>Vamos ajudá-lo a concluir suas tarefas</Text>

            <Text style={styles.sub}>Nome Completo</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Arthur Villaça Gadun"
                keyboardType="text"
            />
            <Text style={styles.sub}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="arthur.villaça.imagi.com"
                keyboardType="text"
            />
            
            <Text style={styles.sub}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeNumber={onChangeNumber}
                secureTextEntry={true}
                value={number}
                placeholder="****************"
                keyboardType="number"
            />
            <Text style={styles.sub}>Confirme a senha</Text>
            <TextInput
                style={styles.input}
                onChangeNumber={onChangeNumber}
                secureTextEntry={true}
                value={number}
                placeholder="****************"
                keyboardType="number"
            />

            <Button style={styles.button1}
                title="Registrar"
                color="#62D2C3"
                onPress={() => navigation.navigate('Home')}
            /> 

            <Link style={styles.h3} to={{ screen: 'Login'}}>
            Ja possui uma conta? Sign In
            </Link>
        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1:{
    fontSize: '1.7em',
    marginBottom:15,
  },

  h2:{
    fontSize:'1.2em',
    marginBottom:15,
  },

  sub:{
    fontSize: '1em',
  },

  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom:15,
    color:'#808080',
    borderRadius:9,
    borderColor:'#62D2C3',
    borderWidth:'2px',
  },

  button1:{
    width:200,
    marginBottom:10,
  },

  h3:{
    marginTop:20,
    fontSize:'1em',
  },
});
