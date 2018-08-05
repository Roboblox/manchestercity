import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBpVfJFhQBscSN60hURN7PJxH9__TZEbRM",
  authDomain: "m-city-4ca97.firebaseapp.com",
  databaseURL: "https://m-city-4ca97.firebaseio.com",
  projectId: "m-city-4ca97",
  storageBucket: "m-city-4ca97.appspot.com",
  messagingSenderId: "585461711153"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB
  .ref("matches")
  .once("value")
  .then(snapshot => {
    console.log(snapshot.val());
  });
