// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgne_rtkSgpriLONHgvLi3opOqU17eRRw",
  authDomain: "fir-auth-b5c3c.firebaseapp.com",
  projectId: "fir-auth-b5c3c",
  storageBucket: "fir-auth-b5c3c.appspot.com",
  messagingSenderId: "177299455784",
  appId: "1:177299455784:web:15fc6fc3898872bb7b5a1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)