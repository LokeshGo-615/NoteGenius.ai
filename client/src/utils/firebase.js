
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authNoteGenius-239c1.firebaseapp.com",
  projectId: "authNoteGenius-239c1",
  storageBucket: "authNoteGenius-239c1.firebasestorage.app",
  messagingSenderId: "38287352918",
  appId: "1:38287352918:web:6f77898f2179a9328ec7f7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };