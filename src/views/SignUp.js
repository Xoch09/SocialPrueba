import { registerWithEmail } from '../lib/authentication.js';
import { routerO } from '../router/router.js';

export const signUp = () => {

  const sectionSignUp = document.createElement("section");
//sectionSignUp.className ="background-radial-gradient overflow-hidden";
sectionSignUp.setAttribute("id", "signUpView");
sectionSignUp.setAttribute("class","background-radial-gradient overflow-hidden");
sectionSignUp.innerHTML = `
<div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
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
          
          <form id="formSignUp"> 
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
              <ul>
                  <li>Mínimo 8 caracteres</li>
                  <li>Máximo 15</li>
                  <li>Al menos una letra mayúscula</li>
                  <li>Al menos una letra minúscula</li>
                  <li>Al menos un dígito</li>
                  <li>Sin espacios en blanco</li>
                  <li>Al menos 1 caracter especial</li>
              </ul>
            </div>

            <!-- Repeat password input -->
            <div class="form-outline mb-4">
              <input type="password" id="repeatPassword" class="form-control" />
              <label class="form-label" for="repeatPassword">Repetir Contraseña</label>
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <label class="form-check-label text-black" for="form2Example33">
                      Acepto los <a href="#!" class="text-blue"><u>Términos y Condiciones</u></a>
                    </label>
            </div>

            <!-- Submit button -->
            <button id="sign-up" class="btn btn-primary btn-block mb-4">
              Registrarme
            </button>

            <!-- Register buttons -->
            <div class="text-center">
              <p>o ingresa con:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
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
`

sectionSignUp.querySelector('#formSignUp').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.psw.value;
    registerWithEmail(email, password)
      .then((useCredential) => {
        routerO('/home');
      })
      .catch(error => {
        console.error(error);
        alert(error.message);
      });
  });

  return sectionSignUp;
}