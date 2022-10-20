import React from "react";
import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native';
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

            <Pressable style={styles.pressable}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.pressableText}>LOGIN</Text>
            </Pressable>  

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

  img1:{
    width:150,
    height:150,
    marginBottom:20,
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

  pressable:{
    backgroundColor: 'rgb(98, 210, 195)',
    width:80,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    margin:8,
    borderRadius:2
  },

  pressableText:{
    fontWeight: 'bold',
    color:'white',
  },

  h3:{
    marginTop:20,
    fontSize:'1em',
  },

});
