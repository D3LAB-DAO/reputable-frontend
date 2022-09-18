import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/compat/app";
import firebaseConfig from './key.json'

import './assets/main.css'

const app = createApp(App)
/*
const firebaseConfig = {
    apiKey: "AIzaSyB8cvs-f2z2rzyCgV9hpsUapseMqZQMNt0",
    authDomain: "repu-table.firebaseapp.com",
    databaseURL: "https://repu-table-default-rtdb.firebaseio.com",
    projectId: "repu-table",
    storageBucket: "repu-table.appspot.com",
    messagingSenderId: "1067494522826",
    appId: "1:1067494522826:web:8a98fd2a5f0ee0bbe75933"
};
*/

firebase.initializeApp(firebaseConfig);

app.use(router)

app.mount('#app')