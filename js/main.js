// import the login component first (actually all components here, but we're starting with login)
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";
import DashboardComponent from "./components/DashboardComponent.js";
import ProfileComponent from "./components/ProfileComponent.js";
import SettingsComponent from "./components/SettingsComponent.js";
import SplashComponent from "./components/SplashComponent.js";

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "splash" } },
      { path: '/splash', name: "splash", component: SplashComponent },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: "users", component: UsersComponent },
      { path: '/dashboard', name: "dashboard", component: DashboardComponent },
      { path: '/profile', name: "profile", component: ProfileComponent },
      { path: '/settings', name: "settings", component: SettingsComponent }
    ]
  });

  const vm = new Vue({

    data: {
      authenticated: false,
      administrator: false,

      mockAccount: {
        username: "user",
        password: "password"
      },

      user: [],

      //currentUser: {},
    },

    created: function () {
      // do a localstorage session check and set authenticated to true if the session still exists
      // if the cached user exists, then just navigate to their user home page

      // the localstorage session will persist until logout
    },

    methods: {
      setAuthenticated(status, data) {
        debugger;
        this.authenticated = status;
        this.administrator = parseInt(data.isadmin);
        this.user = data;
      },

      logout() {
        // delete local session

        // push user back to login page
        this.$router.push({ path: "/login" });
        this.authenticated = false;
        this.administrator = false;
      }
    },

    router: router
  }).$mount("#app");

  router.beforeEach((to, from, next) => {
    console.log('router guard fired')

    if (vm.authenticated == false) {
      next("/login");
    } else {
      next();
    }
  })
})();