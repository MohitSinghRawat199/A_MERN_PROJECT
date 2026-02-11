
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-5e323.firebaseapp.com",
  projectId: "authexamnotes-5e323",
  storageBucket: "authexamnotes-5e323.firebasestorage.app",
  messagingSenderId: "613367236970",
  appId: "1:613367236970:web:060b60d71c18fe2b9a3d13"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};