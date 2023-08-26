import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjJCrVGLqI3Pp2_Y1WeTK7qHrM_DtxeNk",
  authDomain: "psychesnap.firebaseapp.com",
  projectId: "psychesnap",
  storageBucket: "psychesnap.appspot.com",
  messagingSenderId: "1039286009628",
  appId: "1:1039286009628:web:0e0d8a3a97023f448084d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const login = document.querySelector("login");
login.addEventListener("click", (event) => {
  event.preventDefault();

  const mail = login.exampleInputEmail1.value;
  const pass = login.exampleInputPassword1.value;

  signInWithEmailAndPassword(auth,mail,pass)
  .then(() => {
      console.log("hello");
      window.location.replace('index1.html')
  })
  .catch(() => {
      console.log("Error");
  })
})