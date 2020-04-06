export default {
    name: "LoginComponent",
    template: `
    <section id="login">
    <div class="row justify-content-md-center">
        <div class="col col-lg-6">
        <h1 class="login-heading">ALL OF YOUR FAVORITE OLD SCHOOL CONTENT</h1>
        <hr class="login-divide">
        <h2 class="flash-login">IN A FLASH</h2>
        <p class="hero-desc">All the best content from the 50s to the 90s.</p>

        <form class="login-form rounded col-lg-6 mx-auto">
        <h3>Login to Roku</h3>

        <div class="alert alert-danger d-none" role="alert" id="alertArea">
            <span class="message"></span>
        </div>

        <div class="form-group">
            <label for="username">Username:</label>
            <input v-model="input.username" class="form-control" name="username" type="text" value="" placeholder="Username">
        </div>

        <div class="form-group password">
            <label for="password">Password:</label>
            <input v-model="input.password" class="form-control" name="password" type="password" value="" placeholder="Password">
        </div>
        <button v-on:click.prevent="login()" class="login-btn btn-block" type="submit">LOGIN</button>
        </form>
        </div>
    </div>
    </section>
    `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },
        }
    }, 

    methods: {
        login() {

            if (this.input.username != "" && this.input.password != "") {

                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/admin_login.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (typeof data != "object") { 
                            console.warn(data);

                            let message = "Failed to login. Please try again.";
                            let alert = document.querySelector('.message');
                            let alertCon = document.querySelector("#alertArea");

                            alertCon.classList.remove('d-none');
                            alert.innerHTML = message;
                        } else {
                            this.$emit("authenticated", true, data);
                            this.$router.replace({ name: "users" });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                let message = "Please fill out the required fields.";
                let alert = document.querySelector('.message');
                let alertCon = document.querySelector("#alertArea");

                alertCon.classList.remove('d-none');
                alert.innerHTML = message;
            }
        }
    }
}