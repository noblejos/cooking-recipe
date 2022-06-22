import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0pzS4aKfMCEOzcnbz2SWLyjhfWo17aZo",
    authDomain: "cooking-ninja-site-7531a.firebaseapp.com",
    projectId: "cooking-ninja-site-7531a",
    storageBucket: "cooking-ninja-site-7531a.appspot.com",
    messagingSenderId: "661103206872",
    appId: "1:661103206872:web:2c79a74752bf1fefc792ad"
  };

//   init firbase

firebase.initializeApp(firebaseConfig)

// init service

const projectFirestore = firebase.firestore()

export { projectFirestore }