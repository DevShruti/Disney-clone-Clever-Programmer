import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyABFylTHZY5lxj3aXU9WKeRfDyxgKJMIqI",
    authDomain: "disneyplus-clone-a5f53.firebaseapp.com",
    projectId: "disneyplus-clone-a5f53",
    storageBucket: "disneyplus-clone-a5f53.appspot.com",
    messagingSenderId: "316525667297",
    appId: "1:316525667297:web:8407705e5f55181173a8a0",
    measurementId: "G-E5MW5LEE7E"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;