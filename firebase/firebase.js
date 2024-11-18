import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDh22RleR8Of3RqC-PYMvQB2bfGR0QaD4M",
    authDomain: "albertaregionalcareer.firebaseapp.com",
    projectId: "albertaregionalcareer",
    storageBucket: "albertaregionalcareer.appspot.com",
    messagingSenderId: "291953910835",
    appId: "1:291953910835:web:d40b21f20effb84aed6f46"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };