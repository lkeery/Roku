import SelectProfileComponent from './SelectProfileComponent.js';

export default {
    name: "UsersComponent",
    template: `
    <section id="users">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="users-heading">{{ message }}</h1>
                <div class="col-lg-12 card-deck justify-content-center">
                <user class="col-lg-3" v-for="(user,index) in userList" :liveuser="user" :key="index"/>
                </div>
            </div>
        </div>
    </section>
    `,

    created: function () {
		this.fetchAllUsers();
	},

    data() {
        return {
            message: "Who's Using Flashback?",
            userList: []
        }
    },

    methods: {
		fetchAllUsers() {
			const url = './admin/admin_getusers.php?allusers=true';

			fetch(url)
			.then(res => res.json())
			.then(data => this.userList = data)
			.catch((error) => console.error(error))
		}
    },
    
    components: {
		user: SelectProfileComponent
	}
}