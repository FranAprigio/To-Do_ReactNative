import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main_Dash from "./src/Pages/Dashboard/Main_Dash"
import Login from "./src/Pages/Login/Login"
import Registration from "./src/Pages/Registration/Registration"
import Home from "./src/Pages/HomeScreen/Home"




const Stack = createNativeStackNavigator();


export default function App() {
  return (


    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName="Main_Dash">
        <Stack.Screen name="Main_Dash" component={Main_Dash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
