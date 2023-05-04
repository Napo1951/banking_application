import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYbi9yZL0DOY3RKw1qScyVZM3W3pTb7Pw",
  authDomain: "bankingapp-102e7.firebaseapp.com",
  projectId: "bankingapp-102e7",
  storageBucket: "bankingapp-102e7.appspot.com",
  messagingSenderId: "598408160841",
  appId: "1:598408160841:web:0784badda67634bb0e4198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);