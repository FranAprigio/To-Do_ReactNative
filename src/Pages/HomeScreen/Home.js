import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Lista from "../../Components/List/Lista";

import {AuthContext} from "../../../Context/context.js"

export default function Home({navigation}) {
  const {name} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.fhalf}>
          <View style={styles.iconContainer}>
            <Icon.Button
            name="chevron-left"
            size={40}
            backgroundColor="#62D2C3"
            onPress={() => navigation.navigate('Login')}>

            </Icon.Button>
          </View>

          <Image style={styles.img1} source={require('../../../assets/iconpep.png')}></Image>
            
          <Text value={name} onChangeText={(texto) => setName(texto)} style={styles.tex}>Bem Vindo {name}</Text>

        </View>
        <View style={styles.shalf}>
            <Image style={styles.img2} source={require('../../../assets/books.png')}></Image>

            <Text style={styles.tr}>Lista de Tarefas</Text>

            <Lista />
        </View> 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',    
  },

  iconContainer:{
    flexDirection:'column',
    alignSelf:'end',
    //marginLeft:280
    },

  fhalf:{
    backgroundColor:'#62D2C3',
    height:'40%',
    width:'100%',
    //alignItems:'center',    
  },

  img1:{
    height:'120px',
    width:'120px',
    alignSelf:'center',
  },

  tex:{
    fontSize: '1.3em',
    alignSelf:'center',
  },

  shalf:{
    width:'100%',
    height:'60%',
    alignItems:'center',
  },

  img2:{
    height:'120px',
    width:'120px',
  },

  tr:{
    fontSize:'1.5em',
  },

});
