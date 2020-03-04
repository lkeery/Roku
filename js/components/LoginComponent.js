import FormComponent from './FormComponent.js';

export default {
    template: `
    <section>
    <header>
    <nav class="navbar">
        <a routerLink="/" class="navbar-brand" href="#">
            <img src="./images/flashback-logo-white.svg" alt="Logo">
        </a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a href="/" class="nav-link signin">Home</a>
            </li>
        </ul>
    </nav>
    </header>
    <div class="row justify-content-md-center">
        <div class="col col-lg-6>
        </div>
    </div>
    </section>
    `,

    data() {
        return {
            
        }
    }
}