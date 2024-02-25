import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPh2DVIBERl8-ZdPR09Ran3ojUrWriDyY",
  authDomain: "v1-c6bbf.firebaseapp.com",
  projectId: "v1-c6bbf",
  storageBucket: "v1-c6bbf.appspot.com",
  messagingSenderId: "595951408229",
  appId: "1:595951408229:web:9fa3a47beea39c013ba28c"


};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
