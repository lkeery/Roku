export default {
    name: "TelevisionComponent",

    template: `
    <div class="row" id="dashboard-parent">
    <nav class="col-md-2 d-md-block sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link :to="{ name: 'dashboard' }" class="nav-link"><i class="fas fa-film"></i>&nbsp;&nbsp;Movies</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'television' }" class="nav-link active"><i class="fas fa-tv"></i>&nbsp;&nbsp;Television<span class="float-right"><i class="fas fa-arrow-right"></i></span></router-link>
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'music' }" class="nav-link"><i class="fas fa-music"></i>&nbsp;&nbsp;Music</router-link>
          </li>
        </ul>
        <p class="fixed-bottom copyright">Copyright &copy; 2020 Roku</p>
      </div>
    </nav>

    

    <div class="ml-sm-auto col-lg-10 px-4">
    <div class="col-lg-12">
    <form id="search">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text" id="btnGroupAddon"><i class="fas fa-search"></i></div>
      </div>
      <input type="text" class="form-control" placeholder="Search Movies, TV, Music..." aria-label="Search" aria-describedby="btnGroupAddon">
      <div class="input-group-append">
        <button class="btn btn-secondary" type="button" id="button-addon2">Search</button>
      </div>
    </div>
</form>
    </div>
    <div class="row">      
    <div class="col-md-4 media-container">
                <h4 class="media-title">{{currentMediaDetails.television_title}}</h4>
                <ul class="media-info-bar">
                  <li><span class="media-year"><i class="fas fa-history"></i> {{currentMediaDetails.television_year}}</span></li>
                  </ul>
                <p class="media-details" v-html="currentMediaDetails.television_storyline"></p>
                
                
            </div>

            <div class="col-md-8 media-container">
                <video autoplay controls muted :src="'media/tv/' + currentMediaDetails.television_file" class="fs-video"></video>
            </div>
        </div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-3 border-bottom">
        <h1>Television</h1>
        </div>
        <div class="thumb-wrapper col-lg-12">
        <img v-for="item in allRetrievedVideos" :src="'images/covers/' + item.television_cover" alt="Media Thumb" @click="loadNewMovie(item)" class="movie-thumbnail hvr-float">
        </div>
        </div>
    </div>
    `,

    data: function () {
      return {
          currentMediaDetails: {},
          allRetrievedVideos: []
      }
  },

  created: function () {
      this.retrieveVideoContent();
  },

  methods: {
      retrieveVideoContent() {
        if (localStorage.getItem("cachedEpisode")) {
          this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedEpisode"));

          this.currentMediaDetails = this.allRetrievedVideos[0];
        } else {
              let url = `./admin/index.php?media=television`;

              fetch(url)
                  .then(res => res.json())
                  .then(data => {
                      localStorage.setItem("cachedEpisode", JSON.stringify(data));

                      this.allRetrievedVideos = data;
                      this.currentMediaDetails = data[0];
                  })
                }
      },

      loadNewMovie(movie) {
          this.currentMediaDetails = movie;
      }
  }
}