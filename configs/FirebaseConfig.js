// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCO8rBhlhcgKynAb8PF64-V90Dxl5pcKdM",
//   authDomain: "web3drive.firebaseapp.com",
//   projectId: "web3drive",
//   storageBucket: "web3drive.appspot.com",
//   messagingSenderId: "493654589397",
//   appId: "1:493654589397:web:85c63a3f60cf6619b3075c",
//   measurementId: "G-SBBELRJKPH",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCPb9COlLfoxK28yMQIsqicLdYil3nQAM8",
  authDomain: "ai-travel-planner-abb9c.firebaseapp.com",
  projectId: "ai-travel-planner-abb9c",
  storageBucket: "ai-travel-planner-abb9c.appspot.com",
  messagingSenderId: "203450966457",
  appId: "1:203450966457:web:576f296362c7d8682e5668"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
