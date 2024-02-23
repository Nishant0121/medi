// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCgbscmmjaipVsrC-3o_hK_C5iTBux-LVU",
  authDomain: "hackathon-89693.firebaseapp.com",
  projectId: "hackathon-89693",
  storageBucket: "hackathon-89693.appspot.com",
  messagingSenderId: "878310288809",
  appId: "1:878310288809:web:16beeb881369ecd2f928b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
