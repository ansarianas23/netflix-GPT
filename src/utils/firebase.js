// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClWsDKmh3mwkC4LfqhXn4N8rbkZoSy4Uw",
  authDomain: "netflix-gpt-325bc.firebaseapp.com",
  projectId: "netflix-gpt-325bc",
  storageBucket: "netflix-gpt-325bc.appspot.com",
  messagingSenderId: "689916484862",
  appId: "1:689916484862:web:8d685ba3f1b6cbe9f619af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();