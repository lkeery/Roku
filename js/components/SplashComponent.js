export default {
    name: "SplashComponent",
    template: `
    <section id="splash">
    <div class="row justify-content-md-center">
    <div class="col col-lg-6">
            <h1 class="hero-heading">All of your favourite old school content</h1>
            <h2 class="flash">In a Flash</h2>
            <router-link :to="{ name: 'login' }" class="hero-call mx-auto" role="button" aria-disabled="true">Login</router-link>
    </div>
    </div>

    <div class="row justify-content-md-center">
    <div class="col col-lg-12 card-deck">
 
    <div class="col col-lg-4 col-sm-4 card text-center">
      <div class="card-body">
        <img src="./images/movie-icon.svg" alt="Movies" class="card-img" style="margin-top: 16px;">
        <h5 class="card-title">Movies</h5>
        <p class="card-text">
        <router-link :to="{ name: 'login' }" class="btn btn-primary">See Movies</router-link>
        </p>
        
      </div>
    </div>
 

    <div class="col col-lg-4 col-sm-4 card text-center">
      <div class="card-body">
        <img src="./images/music-icon.svg" alt="Music" class="card-img">
        <h5 class="card-title">Music</h5>
        <p class="card-text">
        <router-link :to="{ name: 'login' }" class="btn btn-primary">See Music</router-link>
        </p>
        
      </div>
    </div>

    <div class="col col-lg-4 col-sm-4 card text-center">
      <div class="card-body">
        <img src="./images/tv-icon.svg" alt="TV" class="card-img" style="margin-top: 16px;">
        <h5 class="card-title">Television</h5>
        <p class="card-text">
        <router-link :to="{ name: 'login' }" class="btn btn-primary">See Shows</router-link>
        </p>
        
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