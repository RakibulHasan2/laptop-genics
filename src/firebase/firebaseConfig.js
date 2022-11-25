// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAencW4-xicB8g1P_t3bpixP7ehM8XkYPw",
  authDomain: "laptop-genics.firebaseapp.com",
  projectId: "laptop-genics",
  storageBucket: "laptop-genics.appspot.com",
  messagingSenderId: "1047532568989",
  appId: "1:1047532568989:web:0898cd8def068d59e46f74",
  measurementId: "G-0S4FTJT117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;