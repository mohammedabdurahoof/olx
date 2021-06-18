import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBS1UbffOzzkJdlzSVzIeocugEx1TmG-As",
    authDomain: "olx-sample-627c5.firebaseapp.com",
    projectId: "olx-sample-627c5",
    storageBucket: "olx-sample-627c5.appspot.com",
    messagingSenderId: "1027402551669",
    appId: "1:1027402551669:web:dfeff18769e1954fdac33c",
    measurementId: "G-Q657E5LGV9"
  };

  export default firebase.initializeApp(firebaseConfig)