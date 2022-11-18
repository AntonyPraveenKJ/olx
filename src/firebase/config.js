import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDSHWomKA6lPX9u1Tu04yWJWLkP4dCO2E8",
    authDomain: "olxdemo-ae65a.firebaseapp.com",
    projectId: "olxdemo-ae65a",
    storageBucket: "olxdemo-ae65a.appspot.com",
    messagingSenderId: "135404712547",
    appId: "1:135404712547:web:fedf291e2e345ac5147e56",
    measurementId: "G-ZC3FV20BN5"
  };

 export default firebase.initializeApp(firebaseConfig)