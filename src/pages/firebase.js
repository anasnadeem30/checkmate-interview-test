import firebase from 'firebase/app';
import 'firebase/firestore'; // If you're using Firestore
import 'firebase/auth';      // If you're using Authentication
import 'firebase/storage';   // If you're using Storage
import firebaseConfig from './firebaseConfig';

// Initialize Firebase with the configuration object
firebase.initializeApp(firebaseConfig);

// Export the Firebase services you need (auth, firestore, storage, etc.)
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Export the Firebase instance for other uses
export default firebase;