import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3l9omP5_KUjd8JU2QU2CFGfq8s8oeeBg",
  authDomain: "fir-login-4d567.firebaseapp.com",
  projectId: "fir-login-4d567",
  storageBucket: "fir-login-4d567.appspot.com",
  messagingSenderId: "867616814528",
  appId: "1:867616814528:web:a7ad908ce1743e143c8425",
  measurementId: "G-WLQLFXW4HH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";

const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();
const provider3 = new FacebookAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../loginsuccessful.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

const githubLogin = document.getElementById("github-login-btn");
githubLogin.addEventListener("click", () => {
  signInWithPopup(auth, provider2)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../loginsuccessful.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

const facebookLogin = document.getElementById("facebook-login-btn");
facebookLogin.addEventListener("click", () => {
  signInWithPopup(auth, provider3)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../loginsuccessful.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
