import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyW2XFJL23UWOo82kMNLcsjpx9_t5MLVM",
  authDomain: "react-netflix-clone-765b1.firebaseapp.com",
  projectId: "react-netflix-clone-765b1",
  storageBucket: "react-netflix-clone-765b1.appspot.com",
  messagingSenderId: "707716886278",
  appId: "1:707716886278:web:bdeb597a24f86143bcb887",
  measurementId: "G-7QBV7CFDVT",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
