import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import firebase from 'firebase';

function Register(){
  return(
    <View style={styles.container2}>
      <Text style={styles.barstyle}>Bienveune dans Register</Text>
      <TextInput style={styles.input} placeholder="user name"/>
      <TextInput style={styles.input} placeholder="email"/>
      <TextInput style={styles.input} type="password" placeholder="password"/>
      <View style={styles.buttonContainer}>
        <Button title="INSCRIPTION"/>
      </View>
    </View>
  )
}

const styles = {
  container2:{
    margin: 15,
    color: "red"
  },
  input:{
    height: 45,
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    padding: 15
  },
  buttonContainer:{
    margin: 5
  },
  barstyle:{
    height: 100,
    padding: 20,
    textAlign: "center",
    fontSize: 20
  }
}

export default Register;
