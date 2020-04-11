import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";
import SplashComponent from "./components/SplashComponent.js";
import DashboardComponent from "./components/DashboardComponent.js";
import MusicComponent from "./components/MusicComponent.js";
import TelevisionComponent from "./components/TelevisionComponent.js";

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "splash" } },
      { path: '/splash', name: "splash", component: SplashComponent },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: "users", component: UsersComponent },
      { path: '/dashboard', name: "dashboard", component: DashboardComponent },
      { path: '/television', name: "television", component: TelevisionComponent },
      { path: '/music', name: "music", component: MusicComponent },
    ]
  });

  const vm = new Vue({

    data: {
      authenticated: false,
      administrator: false,
      user: []
    },

    created: function () {
      if (localStorage.getItem("cachedUser")) {
        let user = JSON.parse(localStorage.getItem("cachedUser"));

        this.authenticated = true;

        this.$router.push({ name: "dashboard", params: { currentuser: user }}).catch(err => {});
      } else {
        this.$router.push({ name: "login" }).catch(err => {});
      }
    },

    methods: {
      setAuthenticated(status, data) {
        debugger;
        this.authenticated = status;
        this.administrator = parseInt(data.isadmin);
        this.user = data;
      },

      logout() {
        this.$router.push({ path: "/login" });
        this.authenticated = false;
        this.administrator = false;

        if(localStorage.getItem("cachedUser")) {
          localStorage.removeItem("cachedUser");
        }

        if (localStorage.getItem("cachedVideo")) {
          localStorage.removeItem("cachedVideo");
        }
      }
    },

    router: router
  }).$mount("#app");

  // router.beforeEach((to, from, next) => {
  //   console.log('router guard fired')

  //   if (vm.authenticated == false) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // })
})();