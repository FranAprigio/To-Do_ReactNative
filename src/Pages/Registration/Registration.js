import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
                title="Press me"
                onPress={() => navigation.navigate('Home')}
            /> 

            <Text style={styles.h3}>Ja possui uma conta? Sign In</Text>

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




  input: {
    height: 40,
    width:170,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom:23,
  },

  button1:{
    width:100,
  },
});
