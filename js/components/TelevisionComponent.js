export default {
    name: "TelevisionComponent",
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
      filterMedia(filter) {
        //debugger;
        if (localStorage.getItem("cachedUser")) {
          this.userCached = JSON.parse(localStorage.getItem("cachedUser"));
  
          this.userPermissions = this.userCached.permissions;
  
          if (this.userPermissions == 0) {
            let url = `./admin/index.php?media=television&permissions=0&filter=${filter}`;
  
            fetch(url)
              .then(res => res.json())
              .then(data => {
                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];
              })
          } else {
            let url = `./admin/index.php?media=television&permissions=1&filter=${filter}`;
  
            fetch(url)
              .then(res => res.json())
              .then(data => {
                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];
              })
          }
        }
      },
  
      retrieveVideoContent() {
        
        if (localStorage.getItem("cachedUser")) {
  
          this.userCached = JSON.parse(localStorage.getItem("cachedUser"));
  
          this.userPermissions = this.userCached.permissions;
  
          if (this.userPermissions == 0) {
  
            if (localStorage.getItem("cachedEpisode")) {
              this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedEpisode"));
  
              this.currentMediaDetails = this.allRetrievedVideos[0];
            } else {
              //debugger;
              let url = `./admin/index.php?media=television&permissions=0`;
  
              fetch(url)
                .then(res => res.json())
                .then(data => {
                  localStorage.setItem("cachedEpisode", JSON.stringify(data));
  
                  this.allRetrievedVideos = data;
                  this.currentMediaDetails = data[0];
                })
            }
          } else {
  
            if (localStorage.getItem("cachedEpisode")) {
              this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedEpisode"));
  
              this.currentMediaDetails = this.allRetrievedVideos[0];
            } else {
              //debugger;
              let url = `./admin/index.php?media=television&permissions=1`;
  
              fetch(url)
                .then(res => res.json())
                .then(data => {
                  localStorage.setItem("cachedEpisode", JSON.stringify(data));
  
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