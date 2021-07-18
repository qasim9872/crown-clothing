import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCsbZeot3cZqp9hVuqKCvxVHscqwWLLdA",
  authDomain: "crwn-clothing-893a5.firebaseapp.com",
  projectId: "crwn-clothing-893a5",
  storageBucket: "crwn-clothing-893a5.appspot.com",
  messagingSenderId: "647964485604",
  appId: "1:647964485604:web:69ce5f09c3b731898f09f1",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
