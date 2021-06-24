import React, {useState} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

function Home(){
  const [users, setUsers] = useState([]);

    var db = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
      var docs = Array();
      querySnapshot.forEach((doc) => {
        var single = Array(doc.id, doc.data())
        docs.push(single)
      });
      setUsers(docs)
    });

  return(
    <View style={styles.container}>
      {
        users.map(e => {
          return(
            <View style={styles.block}>
              <Text style={styles.identifiant}>identifiant: {e[0]}</Text>
              <Text style={styles.username}>userName: {e[1].userName}</Text>
            </View>
            )
        })
      }
    </View>
  )
}

const styles = {
  container:{
    marginLeft: 15,
    marginRight: 15
  },
  block:{
    margin: 3,
    backgroundColor: "grey"
  },
  identifiant:{
    backgroundColor: "aliceblue",
    height: 30,
    textAlign: 'center'
  },
  username:{
    backgroundColor: "beige",
    height: 20,
    textAlign: 'center'
  }
}

export default Home;