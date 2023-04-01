import { routerO } from "../router/router";
import authApp from "../lib/barrel";


const Router = cxn.router;


export const post = ` 
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div class="container py-5">
    <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px">
      <h5 class="fw-bold text-primary text-uppercase">Crea tu Post-it</h5>
      <h1 class="mb-0">Deja un mensaje que te represente al 1000%</h1>
    </div>

    <!-- New Post-it  Start -->
    <div class="container text-center mx-auto bg-faded">
      <form method="POST" class="post-form">
        <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
        <button type="submit" class="save btn btn-secondary">Guardar</button>
      </form>
    </div>
    <!-- New Post-it  Start -->
  </div>
</div>
`