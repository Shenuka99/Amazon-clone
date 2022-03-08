// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvRc9_z0huHGCt2WTB-2xugCkza8605xY",
  authDomain: "challange-c712b.firebaseapp.com",
  projectId: "challange-c712b",
  storageBucket: "challange-c712b.appspot.com",
  messagingSenderId: "760054175977",
  appId: "1:760054175977:web:129686a1ada3735e5eb878",
  measurementId: "G-DL3W0RP2TJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
