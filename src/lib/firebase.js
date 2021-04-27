import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBbZkjPZty86Q2Y_lMC2OMWniJpyugOWXA',
  authDomain: 'instagram-3e17d.firebaseapp.com',
  projectId: 'instagram-3e17d',
  storageBucket: 'instagram-3e17d.appspot.com',
  messagingSenderId: '633030540477',
  appId: '1:633030540477:web:70c3120770accd7890cbd4',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
