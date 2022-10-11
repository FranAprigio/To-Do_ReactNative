import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';



export default function Login() {
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
            <Button style={styles.button1}
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />           
            <Text style={styles.h3}>Não possui uma conta? Sign Up</Text>

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
    fontSize:15,
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

  },
});
