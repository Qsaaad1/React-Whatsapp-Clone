import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtHcQtJM2CnisKrJjiB3gBTr8vhjZcD2o",
  authDomain: "react-whatsapp-clone-80b2f.firebaseapp.com",
  projectId: "react-whatsapp-clone-80b2f",
  storageBucket: "react-whatsapp-clone-80b2f.appspot.com",
  messagingSenderId: "1031823525854",
  appId: "1:1031823525854:web:5d47d4ce1a594731de7f4f",
  measurementId: "G-E9EHENHP8E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;