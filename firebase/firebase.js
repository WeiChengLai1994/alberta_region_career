import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // Import Firebase Authentication

const firebaseConfig = {
    apiKey: "AIzaSyDh22RleR8Of3RqC-PYMvQB2bfGR0QaD4M",
    authDomain: "albertaregionalcareer.firebaseapp.com",
    projectId: "albertaregionalcareer",
    storageBucket: "albertaregionalcareer.appspot.com",
    messagingSenderId: "291953910835",
    appId: "1:291953910835:web:d40b21f20effb84aed6f46"
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);  // Initialize Firebase Authentication

// Export both Firestore and Auth
export { db, auth };
