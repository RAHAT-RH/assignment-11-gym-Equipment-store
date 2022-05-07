// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdW-UO_B8uRzN-oeYUV0YNQvTGb9MSCFE",
  authDomain: "gym-store-assignment-11.firebaseapp.com",
  projectId: "gym-store-assignment-11",
  storageBucket: "gym-store-assignment-11.appspot.com",
  messagingSenderId: "851134519089",
  appId: "1:851134519089:web:8f8188ffd6817d3948c210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;