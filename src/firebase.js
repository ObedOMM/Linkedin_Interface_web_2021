import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyArSSYGSKuOHJATAcDViXlCeImF8dgreD4",
  authDomain: "linkedin-clone-yt-c2f94.firebaseapp.com",
  projectId: "linkedin-clone-yt-c2f94",
  storageBucket: "linkedin-clone-yt-c2f94.appspot.com",
  messagingSenderId: "587291971799",
  appId: "1:587291971799:web:1fe7b79b8b99a44c882092",
  measurementId: "G-3RPESRS50K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;

export { db, auth };