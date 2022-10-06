import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBDSjOO7T8A6EPU7EMXWlos0OCyFt5L0LI",
    authDomain: "tiendaboom38090.firebaseapp.com",
    projectId: "tiendaboom38090",
    storageBucket: "tiendaboom38090.appspot.com",
    messagingSenderId: "1054037158308",
    appId: "1:1054037158308:web:7c1e4a40566f15e6853931"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)