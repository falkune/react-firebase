import React, {useState} from 'react';
import { View, TextInput, Button, Pressable, Text } from 'react-native';
import firebase from 'firebase';

function Login({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => {
    setEmail(e)
  }

  const handlePassword = e => {
    setPassword(e)
  }

  const handleSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("success" + user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + ' ' + errorMessage);
    });
  }

  return(
    <View style={styles.container2}>
      <Text style={styles.barstyle}>Bienvenue dans Login</Text>
      <TextInput 
        style={styles.input} 
        placeholder="email"
        onChangeText={handleEmail}/>
      <TextInput 
        style={styles.input} 
        placeholder="password"
        secureTextEntry={true}
        onChangeText={handlePassword}/>

      <View style={styles.buttonContainer}>
        <Button 
          title="CONNEXION" 
          onPress={handleSubmit}/>
      </View>

      {/* <Pressable onPress={() => navigation.navigate('Register')}>
        <Text>Creer un compte</Text>
      </Pressable> */}
    </View>
  )
}

const styles = {
  container2:{
    margin: 15
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
export default Login;