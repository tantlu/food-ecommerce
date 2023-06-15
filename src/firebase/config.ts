import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB6e_E-nF-b9IImAUy9SunRRdIP8lYdupo",
  authDomain: "food-ecommerce-feb89.firebaseapp.com",
  databaseURL: "https://food-ecommerce-feb89-default-rtdb.firebaseio.com",
  projectId: "food-ecommerce-feb89",
  storageBucket: "food-ecommerce-feb89.appspot.com",
  messagingSenderId: "98195187303",
  appId: "1:98195187303:web:413bb568151432d6b716c2",
  measurementId: "G-TFL8V349XE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
