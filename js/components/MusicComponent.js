export default {
    name: "MusicComponent",
    props: ['currentuser'],

    template: `
    <div class="row" id="dashboard-parent">
    <nav class="col-md-2 d-md-block sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link :to="{ name: 'dashboard' }" class="nav-link"><i class="fas fa-film"></i>&nbsp;&nbsp;Movies</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'television' }" class="nav-link"><i class="fas fa-tv"></i>&nbsp;&nbsp;Television</router-link>
          </li>
          <li class="nav-item">
             <router-link :to="{ name: 'music' }" class="nav-link active"><i class="fas fa-music"></i>&nbsp;&nbsp;Music<span class="float-right"><i class="fas fa-arrow-right"></i></span></router-link>
          </li>
        </ul>
        <p class="fixed-bottom copyright">Copyright &copy; 2020 Roku</p>
      </div>
    </nav>

    <div class="ml-sm-auto col-lg-10 px-4">
    
    <div class="row">      
    <div class="col-md-4 media-container text-center">
    <img :src="'images/covers/' + currentMediaDetails.music_cover" alt="Current Media" class="album-cover" width="200" height="200">
                <h4 class="media-title">{{currentMediaDetails.music_title}}</h4>
                <p class="media-details" v-html="currentMediaDetails.music_artist"></p>
                <ul class="media-info-bar">
                  <li><span class="media-year"><i class="fas fa-history"></i> {{currentMediaDetails.music_year}}</span></li>
                  </ul> 
            </div>

            <div class="col-md-4 media-container">
                <audio controls :src="'media/music/' + currentMediaDetails.music_file" class="audio"></audio>
            </div>
        </div>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-3 border-bottom">
        <h1>Music</h1>
        </div>
        <div class="thumb-wrapper col-lg-12">
        <img v-for="item in allRetrievedVideos" :src="'images/covers/' + item.music_cover" alt="Media Thumb" @click="loadNewMovie(item)" class="movie-thumbnail hvr-float">
        </div>
        </div>
    </div>
    `,
    data: function () {
      return {
        currentMediaDetails: {},
        allRetrievedVideos: [],
        userCached: [],
        userPermissions: {},
      }
    },
  
    mounted() {
      if(this.userPermissions == 1){
        document.getElementById('dashboard-parent').id = 'kids';
      } else {
        document.getElementById('dashboard-parent').id = 'dashboard-parent';
      }
    },
  
    created: function () {
      this.retrieveVideoContent();
    },
  
    methods: {
      retrieveVideoContent() {
        
        if (localStorage.getItem("cachedUser")) {
  
          this.userCached = JSON.parse(localStorage.getItem("cachedUser"));
  
          this.userPermissions = this.userCached.permissions;
  
          if (this.userPermissions == 0) {
  
            if (localStorage.getItem("cachedAudio")) {
              this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedAudio"));
  
              this.currentMediaDetails = this.allRetrievedVideos[0];
            } else {
              //debugger;
              let url = `./admin/index.php?media=music&permissions=0`;
  
              fetch(url)
                .then(res => res.json())
                .then(data => {
                  localStorage.setItem("cachedAudio", JSON.stringify(data));
  
                  this.allRetrievedVideos = data;
                  this.currentMediaDetails = data[0];
                })
            }
          } else {
  
            if (localStorage.getItem("cachedAudio")) {
              this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedAudio"));
  
              this.currentMediaDetails = this.allRetrievedVideos[0];
            } else {
              //debugger;
              let url = `./admin/index.php?media=music&permissions=1`;
  
              fetch(url)
                .then(res => res.json())
                .then(data => {
                  localStorage.setItem("cachedAudio", JSON.stringify(data));
  
                  this.allRetrievedVideos = data;
                  this.currentMediaDetails = data[0];
                })
            }
          }
  
        }
  
  
      },
  
      loadNewMovie(movie) {
        this.currentMediaDetails = movie;
      }
    }
}