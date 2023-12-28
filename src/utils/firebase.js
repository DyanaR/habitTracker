// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpxBtshnqEt0Io8HtrEffw_KRA9cCSgT0",
  authDomain: "huetrack-742d2.firebaseapp.com",
  projectId: "huetrack-742d2",
  storageBucket: "huetrack-742d2.appspot.com",
  messagingSenderId: "494047614856",
  appId: "1:494047614856:web:5f833c9d9c4789417e4c3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app