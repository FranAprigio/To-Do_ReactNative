import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main_Dash from "./src/Pages/Dashboard/Main_Dash"
import Login from "./src/Pages/Login/Login"
import Registration from "./src/Pages/Registration/Registration"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Registration />
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
});
