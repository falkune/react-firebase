import React from 'react';
import { StyleSheet, View } from 'react-native';
import Register from './Register';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import firebase from 'firebase';

const Tab = createMaterialTopTabNavigator();

export default function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyB6nIMjcg9mUn6l-T_lKmagxJ6uoIL2Khw",
    authDomain: "reactnative-5712d.firebaseapp.com",
    projectId: "reactnative-5712d",
    storageBucket: "reactnative-5712d.appspot.com",
    messagingSenderId: "222245090126",
    appId: "1:222245090126:web:549f7b8e4689709c8ee41f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Login"
            component={Login}
            options={{title: "Connexion"}}/>
          <Tab.Screen 
            name="Register"
            component={Register}
            options={{title: "Inscription"}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
