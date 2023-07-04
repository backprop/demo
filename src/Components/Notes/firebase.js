// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-notes-1be18.firebaseapp.com",
  projectId: "react-notes-1be18",
  storageBucket: "react-notes-1be18.appspot.com",
  messagingSenderId: "181303166599",
  appId: "1:181303166599:web:69c44bf55c75c3fbf45a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const notesCollection=collection(db,"notes");