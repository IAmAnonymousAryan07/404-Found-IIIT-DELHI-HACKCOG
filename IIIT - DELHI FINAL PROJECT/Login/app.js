import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js' 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
GoogleAuthProvider, signInWithPopup,  FacebookAuthProvider, signOut } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//User Auth Setup Starts Here

const firebaseConfig = {
  apiKey: "AIzaSyAV-mkKSSGi5JTvkc0NNqzoVrR2R_lXPRA",
  authDomain: "nextonmap-dabd5.firebaseapp.com",
  projectId: "nextonmap-dabd5",
  storageBucket: "nextonmap-dabd5.appspot.com",
  messagingSenderId: "520935336001",
  appId: "1:520935336001:web:58cca6a2e90fbe4d7abec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();


function myFunction(){
  window.location.href = 'Login/login.html';
  document.getElementById("login-btn").value = "LogOut";
}
//Email Sign In and Sign Up
const signin = document.querySelector(".sign-in-form");
// document.getElementById("login-btn").innerHTML = "LogOut"
signin.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = signin.email.value;
  const password = signin.password.value;
  signInWithEmailAndPassword(auth, email , password)
  .then((cred) => {
    console.log("Login Successful ", cred.user);
    ;
    window.location.href = "../index.html";
    
    x.addEventListener("click",(event) => {
      event.preventDefault();
      signOut(auth).then(
        () => {
          console.log("Success");
        }
      )
    })
  })
  .catch((err) => {
    console.log("Login Unsuccessful ", err.message);
  })
})

const signup = document.querySelector(".sign-up-form");
signup.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = signup.name.value;
  const phone = signup.phone.value;
  const email = signup.email.value;
  const password = signup.password.value;
  createUserWithEmailAndPassword(auth, email , password)
  .then((cred) => {
    console.log("Signup Successful ", cred.user);
  })
  .catch((err) => {
    console.log("Signup Unsuccessful ", err.message);
  })
})

//Google Sign In and Sign Up

const google = document.querySelector(".google");
google.addEventListener("click" , (event) => {
  event.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("Successful Login", user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Unsuccessful Login", credential);
  });
})

const googlesignup = document.querySelector(".google-signup");
googlesignup.addEventListener("click" , (event) => {
  event.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("Successful Login", user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Unsuccessful Login", credential);
  });
})