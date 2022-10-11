import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AboveShape from "../../Components/Shape/AboveShape"

export default function MainDash() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Image style={styles.img1} source={require('../../../assets/img1.png')}></Image>
      <Text style={styles.h1}>Iniciando com To-Do</Text>
      <Text style={styles.h2}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed posuere gravida purus id eu condimentum est diam quam. 
      Condimentum blandit diam.</Text>

      <Button style={styles.button1}
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
    width:340,
  },

  img1:{
    width:150,
    height: 150,
    
    
  },

  h1:{
    fontSize:20,
    fontStyle: 'bold',
    paddingBottom: 20,
    paddingTop:60,
  },

  h2:{
    fontSize:15,
    paddingBottom:90,
  },
  button1:{

  },
});
