// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4hn3a-fp-D8Zo4ik0phmadit2ajc98wA",
  authDomain: "board-7fa7f.firebaseapp.com",
  projectId: "board-7fa7f",
  storageBucket: "board-7fa7f.appspot.com",
  messagingSenderId: "184235102937",
  appId: "1:184235102937:web:ef28f9ae967ad287a664c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { app, auth, provider };