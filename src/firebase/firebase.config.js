// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG3q_DjBKk1lztZAWCNAC7hc0P9vOGU0c",
    authDomain: "email-pass-auth-175e6.firebaseapp.com",
    projectId: "email-pass-auth-175e6",
    storageBucket: "email-pass-auth-175e6.appspot.com",
    messagingSenderId: "281073564708",
    appId: "1:281073564708:web:ac5ff33ffa6a0cc5a32cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;