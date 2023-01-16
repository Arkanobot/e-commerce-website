// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//firebase config from firebase acc settings
const firebaseConfig = {
  apiKey: "AIzaSyDs_v95DUJ8gjSWA4r5XxPRf6Y8po4cF8g",
  authDomain: "e-commerce-website-5d5a3.firebaseapp.com",
  projectId: "e-commerce-website-5d5a3",
  storageBucket: "e-commerce-website-5d5a3.appspot.com",
  messagingSenderId: "696917754135",
  appId: "1:696917754135:web:11ca6850dd8bd872907752",
  measurementId: "G-SE0PVNPCPZ",
};

// this initializes the App
const firebaseApp = firebase.initializeApp(firebaseConfig);

//for the DB storage of firebase
export const db = firebaseApp.firestore();

//for all auth related
export const auth = firebase.auth();
