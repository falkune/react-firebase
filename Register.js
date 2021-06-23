import React, {useState} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import firebase from 'firebase';

function Register(){
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hadleUsername = e => {
    setUserName(e)
  }

  const handleEmail = e => {
    setEmail(e)
  }

  const handlePassword = e => {
    setPassword(e)
  }

  var db = firebase.firestore();

  const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      db.collection("users").doc(email).set({
        userName: userName,
        password: password
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  return(
    <View style={styles.container2}>
      <Text style={styles.barstyle}>Bienveune dans Register</Text>
      <TextInput 
        style={styles.input} 
        placeholder="user name"
        onChangeText={hadleUsername}/>
      <TextInput 
        style={styles.input} 
        placeholder="email"
        onChangeText={handleEmail}/>
      <TextInput 
        style={styles.input} 
        type="password" 
        placeholder="password"
        onChangeText={handlePassword}/>
      <View style={styles.buttonContainer}>
        <Button 
          title="INSCRIPTION"
          onPress={handleSubmit}/>
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
