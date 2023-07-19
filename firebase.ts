import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
  
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxqaqX89YKHpaywgc3jj6xYtn8dy92Hz0",
  authDomain: "chatgpt-messenger-pro-83516.firebaseapp.com",
  projectId: "chatgpt-messenger-pro-83516",
  storageBucket: "chatgpt-messenger-pro-83516.appspot.com",
  messagingSenderId: "111652810358",
  appId: "1:111652810358:web:55616e5f756272d58eb957",
  measurementId: "G-WDYN7QMSKJ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
 


export { db };