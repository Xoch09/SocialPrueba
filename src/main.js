import { initFirebase } from "./lib/firebase";
import { routerO } from '../router/router.js';

// Initialize Firebase
initFirebase();

// Initialize Router
function activateRouter() {
  const signInHandler = () => {
    routerO.loadBody("signInView");

  };

  const signUpHandler = () => {
    routerO.loadBody("signUpView");
  };

  const aboutHandler = () => {
    routerO.load("aboutView");
  };

  document.querySelector("#signIn").addEventListener("click", signInHandler);
  document.querySelector("#signUp").addEventListener("click", signUpHandler);
  document
    .querySelector("#signUp2")
    .addEventListener("click", signUpHandler);
  document.querySelector("#about").addEventListener("click", aboutHandler);
}
