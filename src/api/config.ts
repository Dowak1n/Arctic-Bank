// libraries
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCySVDr4VqRQjB2g1IvrKtKsHZ3S4qZR0E',
  authDomain: 'signin-task-fa291.firebaseapp.com',
  projectId: 'signin-task-fa291',
  storageBucket: 'signin-task-fa291.appspot.com',
  messagingSenderId: '179792233620',
  appId: '1:179792233620:web:5d5c668749d68bda45a081',
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

export const auth = getAuth(app);
