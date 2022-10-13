import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Lista from "../../Components/List/Lista";


export default function Home({}) {



  return (
    <View style={styles.container}>
        <StatusBar style="auto" />


        <View style={styles.fhalf}>
            
            <Image style={styles.img1} source={require('../../../assets/iconpep.png')}></Image>
            
            <Text style={styles.tex}>Bem Vindo Arthur</Text>

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

  fhalf:{
    backgroundColor:'#62D2C3',
    height:'40%',
    width:400,
    alignItems:'center',    
  },

  img1:{
    height:'120px',
    width:'120px',
  },

  tex:{
    fontSize: '1.3em',
  },

  shalf:{
    width:400,
    height:'60%',
    alignItems:'center',
  },

  img2:{
    height:'120px',
    width:'120px',
  },


});
