import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBQdGDvT44uXF9rOtyblcWIuCJbMixeQoE',
  authDomain: 'tictactoe-room.firebaseapp.com',
  projectId: 'tictactoe-room',
  storageBucket: 'tictactoe-room.appspot.com',
  messagingSenderId: '499209667846',
  appId: '1:499209667846:web:8d2a3450f80a1a04dfca87',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
