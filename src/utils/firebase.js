// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-3a571.firebaseapp.com",
  projectId: "netflix-gpt-3a571",
  storageBucket: "netflix-gpt-3a571.appspot.com",
  messagingSenderId: "355352798538",
  appId: "1:355352798538:web:59a91cebd5377346184db3",
  measurementId: "G-M2L8MBRKKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const analytics = getAnalytics(app);

// this auth will be used for every task with firebase, so declared it in global space.
export const auth = getAuth();


export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;