// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJCsIq8EEidZ47Lpt1sZCkBF0z7sm8HVE",
  authDomain: "aronic-hardware.firebaseapp.com",
  projectId: "aronic-hardware",
  storageBucket: "aronic-hardware.appspot.com",
  messagingSenderId: "81471325475",
  appId: "1:81471325475:web:2b5c0fdc6780f8e5b0f896",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
