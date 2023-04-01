// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMoIZnaqiWN7MrGggAkrPwJqTMUN-_xXE",
  authDomain: "outsy-mxg.firebaseapp.com",
  databaseURL: "https://outsy-mxg-default-rtdb.firebaseio.com",
  projectId: "outsy-mxg",
  storageBucket: "outsy-mxg.appspot.com",
  messagingSenderId: "1058170420655",
  appId: "1:1058170420655:web:06d17c4cc4440b35d0035a",
  measurementId: "G-MF6SX17B18"
};

export const initFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return {
    app,
    auth,
    db,
  }
}

