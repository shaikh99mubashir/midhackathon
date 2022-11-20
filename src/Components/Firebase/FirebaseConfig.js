// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQK47pJnsUPYz-1l2xQlVnmkM9P3Eucg",
  authDomain: "midhackathon.firebaseapp.com",
  projectId: "midhackathon",
  storageBucket: "midhackathon.appspot.com",
  messagingSenderId: "936675612087",
  appId: "1:936675612087:web:cb5b809357e19325ee8432",
  measurementId: "G-CBZ5DZ595N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app