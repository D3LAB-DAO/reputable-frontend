import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/compat/app";
import firebaseConfig from './key.json'

// CSS
import './assets/uikit.css'
import './assets/style.css'

// Frontend Scripts
import "https://code.jquery.com/jquery-3.4.1.js"
import "./assets/js/uikit.js"
import "./assets/js/uikit-icons.js"
import "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"

// Request function Scripts
import "./assets/js/interface_request.js"

// Interface function Scripts
import "./assets/js/interface.js"

// Chart
import "https://cdn.jsdelivr.net/npm/chart.js"

const app = createApp(App)
firebase.initializeApp(firebaseConfig);

app.use(router)

app.mount('#app')