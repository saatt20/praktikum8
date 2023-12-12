import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyAV0S9HkFI5bfYhCuv-eK2va7OT8AsPhPQ",
    authDomain: "noteapp-6bd31.firebaseapp.com",
    projectId: "noteapp-6bd31",
    storageBucket: "noteapp-6bd31.appspot.com",
    messagingSenderId: "820929249382",
    appId: "1:820929249382:web:b57aa32fa800e8ad9aada7"
});

const FIREBASE = firebase;

export default FIREBASE;