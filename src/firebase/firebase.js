import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4ssZsRY_Luci6HLI5gSjKCFAAlCR9L64",
  authDomain: "smit-try-2a798.firebaseapp.com",
  projectId: "smit-try-2a798",
  storageBucket: "smit-try-2a798.appspot.com",
  messagingSenderId: "414632023813",
  appId: "1:414632023813:web:6278aac59b7cd56f4d896c",
  measurementId: "G-5GYZ55VC3W",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
