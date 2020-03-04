export default {
    template: `
    <section id="splash">
    <header>
            <nav class="navbar">
                <a routerLink="/" class="navbar-brand" href="#">
                    <img src="./images/flashback-logo-white.svg" alt="Logo">
                </a>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="/login" class="nav-link signin">Sign In</a>
                    </li>
                </ul>
            </nav>
    </header>
    <div class="row justify-content-md-center">
    <div class="col col-lg-6">
            <h1 class="hero-heading">All of your favourite old school content</h1>
            <h2 class="flash">In a Flash</h2>
            <a href="#" class="hero-call mx-auto" role="button" aria-disabled="true">Browse</a>
    </div>
    </div>

    <div class="row justify-content-md-center">
    <div class="col col-lg-12 card-deck">
 
    <div class="col col-lg-4 col-sm-4 card text-center">
      <div class="card-body">
        <img src="./images/movie-icon.svg" alt="Movies" class="card-img">
        <h5 class="card-title">Movies</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">See Movies</a>
      </div>
    </div>
 

    <div class="col col-lg-4 col-sm-4 card text-center">
      <div class="card-body">
        <img src="./images/music-icon.svg" alt="Music" class="card-img">
        <h5 class="card-title">Music</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">See Music</a>
      </div>
    </div>

 
    <div class="col col-lg-4 col-sm-4 card text-center">
      <div class="card-body">
        <img src="./images/tv-icon.svg" alt="TV" class="card-img">
        <h5 class="card-title">Television</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">See Shows</a>
      </div>
    </div>

  </div>
</div>

<div class="row">
<footer class="col col-lg-12">
<p>Copyright &copy; 2020 Flashback by Roku</p>
</footer>
</div>

    </section>
    `,

    data() {
        return {

        }
    }
}