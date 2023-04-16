// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCP_yVf6-u8LQAJ2asICTFIvFyEtdOMIZA",
    authDomain: "mu-portfolio.firebaseapp.com",
    projectId: "mu-portfolio",
    storageBucket: "mu-portfolio.appspot.com",
    messagingSenderId: "618057691541",
    appId: "1:618057691541:web:1252d12e94a7574bba069c",
    measurementId: "G-MNJ58JETXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const firestore = getFirestore(app);

export { firestore }