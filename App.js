import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import firebase from 'firebase';

const Tab = createMaterialTopTabNavigator();

export default function App() {

  // var firebaseConfig = {
  //   apiKey: "AIzaSyBpa29ILi5VclnvtRW7jYqCWYW48mj0Drc",
  //   authDomain: "projetr-51fe5.firebaseapp.com",
  //   projectId: "projetr-51fe5",
  //   storageBucket: "projetr-51fe5.appspot.com",
  //   messagingSenderId: "435264371981",
  //   appId: "1:435264371981:web:4b8590d851031d9ba64444",
  //   storageBucket: "projetr-51fe5.appspot.com"
  // };
 
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
          <Tab.Screen 
            name="Home"
            component={Home}
            options={{title: "Accueil"}}/>
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
