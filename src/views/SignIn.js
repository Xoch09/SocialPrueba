import { signInWithGoogle, signInWithPassword } from "../lib/authentication";
import { routerO } from '../router/router.js';

export const signIn = () => {
  const sectionSignIn = document.createElement("section");
  sectionSignIn.className = "background-radial-gradient overflow-hidden";
  sectionSignIn.setAttribute("id", "signInView");

  sectionSignIn.innerHTML = `
    <sectionSignIn class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            La mejor App <br />
            <span style="color: hsl(218, 81%, 75%)">para disfrutar con otros.</span>
          </h1>
          <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
            ab ipsum nisi dolorem modi. Quos?
          </p>
        </div>
  
        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
  
          <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">
              <form id="formSignIn"> 
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" id="email" class="form-control" />
                  <label class="form-label" for="email">Correo Electrónico</label>
                </div>
  
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control" />
                  <label class="form-label" for="password">Contraseña</label> <br>
                  <input type="checkbox" id="showPassword" name="showPassword">
                  <label for="showPassword">Mostrar contraseña</label>
                </div>
  
                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33"></label>
                    Recuerdame
                  </label>
                </div>

                <!-- Simple link -->
                <button type="button" class="btn btn-link btn-floating mx-1" id="password-reset">¿Olvidaste tu constraseña?</button> 
                
                <!-- Register buttons -->
                <div class="text-center">
                <p>¿No estás registrado? <a href="#!">Registrate</a></p>
  
                <!-- Submit button -->
                <button id="sign-in" class="btn btn-primary btn-block mb-4" disabled>
                  Ingresar
                </button>
  
                <!-- Register buttons -->
                <div class="text-center">
                  <p>o ingresa con:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>
  
                  <button id=".google" type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>
  
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>
  
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  

 /*  // Function to open modal
  const openModal = (message) => {
    div.querySelector('.modal').style.display = "block";
    div.querySelector('.modal-content > p:nth-child(2)').textContent = message;
  }; */

  // Add event listeners to the login component

  sectionSignIn.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = sectionSignIn.querySelector("#email").value;
    const password = sectionSignIn.querySelector("#password").value;
    signInWithPassword(username, password)
      .then(
        (useCredential) => {
          routerO('/feed');
        },
        (error) => {
          openModal(error.message);
        })
  });

  sectionSignIn.querySelector('.google').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(
        (useCredential) => {
          routerO('/feed');
        },
        (error) => {
          openModal(error.message);
        });
  });

  sectionSignIn.querySelector('.signup').addEventListener('click', (e) => {
    e.preventDefault();
    routerO('/register');
  });

  sectionSignIn.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    sectionSignIn.querySelector('.modal').style.display = "none";
  });

  // Return the div element
  return sectionSignIn;
}