import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAErySkjkrQL1w3ZZ69hRoVDvfjTFs-Xhw",
    authDomain: "sae-203-les-trois-cirques.firebaseapp.com",
    projectId: "sae-203-les-trois-cirques",
    storageBucket: "sae-203-les-trois-cirques.appspot.com",
    messagingSenderId: "68664375850",
    appId: "1:68664375850:web:e2908006dd2c45ae7fe153"
};

const appFirebase = initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
