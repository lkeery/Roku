export default {
    name: "SelectProfileComponent",
    props: ['liveuser'],

    template: `
        <div class="card user-card" @click="navToUserHome()">         
                <img :src="'images/' + liveuser.avatar + '.jpg'">
                <p class="username">{{ liveuser.username }}</p>
        </div>
    `,

    created: function() {
        if (this.liveuser.avatar === null || this.liveuser.avatar === "null") {
            this.liveuser.avatar = "temp_avatar";
        }
    },

    methods: {
        navToUserHome() {
            if (window.localStorage) {
                localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
            }

            this.$router.push({ name: "dashboard", params: { currentuser: this.liveuser }});
        }
    }

}