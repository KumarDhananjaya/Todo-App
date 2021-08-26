import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDy64b3ZAeQ1pXnMmseSuR0Zsxn0gbtzCs",
  authDomain: "todo-app-42f54.firebaseapp.com",
  projectId: "todo-app-42f54",
  storageBucket: "todo-app-42f54.appspot.com",
  messagingSenderId: "938039506844",
  appId: "1:938039506844:web:7411037003c1d83c8a3a59",
  measurementId: "G-9QED6QF9QY",
});

const db = firebaseApp.firestore();

export default db;
