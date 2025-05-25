import { initializeApp } from 'firebase/app';
 import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYuhqDn75vbOKcX9q8A5gn6M8EHOJ5tew",
  authDomain: "tmdb-c06b5.firebaseapp.com",
  projectId: "tmdb-c06b5",
  storageBucket: "tmdb-c06b5.firebasestorage.app",
  messagingSenderId: "295279889737",
  appId: "1:295279889737:web:7d9b954bd7e2b40477de98",
  measurementId: "G-JCFZQ2L3TG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAYuhqDn75vbOKcX9q8A5gn6M8EHOJ5tew",
//   authDomain: "tmdb-c06b5.firebaseapp.com",
//   projectId: "tmdb-c06b5",
//   storageBucket: "tmdb-c06b5.firebasestorage.app",
//   messagingSenderId: "295279889737",
//   appId: "1:295279889737:web:7d9b954bd7e2b40477de98",
//   measurementId: "G-JCFZQ2L3TG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);