import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { Link } from "@react-navigation/native";


export default function Login({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}>

            <Image style={styles.img1} source={require('../../../assets/to-do.png')}></Image>

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
            <Text style={styles.pass}>Forget Password?</Text>

            <Button style={styles.button}
            title="Login"
            color="#62D2C3"
            onPress={() => navigation.navigate('Home')}/>   


            <Link style={styles.h3} to={{ screen: 'Registration'}}>
            Não possui uma conta? Sign Up
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
    fontSize:20,
    fontStyle: 'bold',
    paddingBottom: 20,

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

  pass:{
    marginBottom:10,
  },

  button:{
    borderColor:'black',

  },

  h3:{
    marginTop:20,
    fontSize:'1em',
  },

});
