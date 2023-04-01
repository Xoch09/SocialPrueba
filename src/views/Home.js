export const home = () => {
  const sectionHome = document.createElement("section");
  sectionHome.className ="container-fluid position-relative p-0";
  sectionHome.setAttribute("id", "main");

  sectionHome.innerHTML = `
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/2.png" width="75%">
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>¡Esperalo!</h1>
                <p>¡Lo nuevo!</p>
                <p><a class="btn btn-lg btn-primary" id="signUp2">Pónte al día</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>Busca tu Post.</h1>
                <p>¡Los mejores post!.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Entrar</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Tus amigos han publicado eventos.</h1>
                <p>Eventos para compartir.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Buscar</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section id="Features">
      <!-- Marketing messaging and featurettes
  ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div id="features" class="container marketing">
        <!-- START THE FEATURETES -->
        <div  class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-muted">It’ll blow
                your mind.</span></h2>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose
              here.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-muted">See for
                yourself.</span></h2>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this
              layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span
                class="text-muted">Checkmate.</span>
            </h2>
            <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really
              intended to be actually read, simply here to give you a better view of what this would look like with some
              actual content. Your content.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
              height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>
      </div><!-- /.container -->

      <hr class="featurette-divider">

    </section>

    <section id="testimonials">
      <article>
        <!-- Carousel wrapper -->
        <div id="usersTestimonials" class="carousel carousel-dark slide text-center" data-mdb-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#usersTestimonials" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#usersTestimonials" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#usersTestimonials" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <!-- Inner -->
          <div class="carousel-inner">
            <!-- Single item -->
            <div class="carousel-item active" data-bs-interval="1000">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" />
                    <h5 class="mb-3">Anna Deynah</h5>
                    <p>UX Designer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" />
                    <h5 class="mb-3">John Doe</h5>
                    <p>Web Developer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                      suscipit laboriosam, nisi ut aliquid commodi.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li>
                        <i class="fas fa-star-half-alt fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" />
                    <h5 class="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="far fa-star fa-sm"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single item -->
            <div class="carousel-item" data-bs-interval="200">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar" />
                    <h5 class="mb-3">John Doe</h5>
                    <p>UX Designer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar" />
                    <h5 class="mb-3">Alex Rey</h5>
                    <p>Web Developer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                      suscipit laboriosam, nisi ut aliquid commodi.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li>
                        <i class="fas fa-star-half-alt fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar" />
                    <h5 class="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="far fa-star fa-sm"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single item -->
            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="avatar" />
                    <h5 class="mb-3">Anna Deynah</h5>
                    <p>UX Designer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar" />
                    <h5 class="mb-3">John Doe</h5>
                    <p>Web Developer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                      suscipit laboriosam, nisi ut aliquid commodi.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li>
                        <i class="fas fa-star-half-alt fa-sm"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block">
                    <img class="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="avatar" />
                    <h5 class="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupti.
                    </p>
                    <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="fas fa-star fa-sm"></i></li>
                      <li><i class="far fa-star fa-sm"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Inner -->
        </div>
        <!-- Carousel wrapper -->
      </article>
  `;



  return sectionHome;
};