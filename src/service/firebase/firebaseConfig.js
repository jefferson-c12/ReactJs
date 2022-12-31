import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAx0mhZ3yRJsA3aZE6dagmy1UnRW3Xpiq0",
    authDomain: "e-commers-239fe.firebaseapp.com",
    projectId: "e-commers-239fe",
    storageBucket: "e-commers-239fe.appspot.com",
    messagingSenderId: "658148387560",
    appId: "1:658148387560:web:246fa7588a936a962cf75d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);