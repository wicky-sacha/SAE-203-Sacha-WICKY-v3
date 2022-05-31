import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AboutView from '../views/AboutView.vue'
import ArtistView from '../views/ArtistView.vue'
import BilletterieView from '../views/BilletterieView.vue'
import ContactView from '../views/ContactView.vue'
import LegalView from '../views/LegalView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/', name: 'About', component: AboutView },
    { path: '/', name: 'Artist', component: ArtistView },
    { path: '/', name: 'Billetterie', component: BilletterieView },
    { path: '/', name: 'Contact', component: ContactView },
    { path: '/', name: 'Legal', component: LegalView },
    { path: '/', name: 'Programmation', component: ProgrammationView },
    // ici les autre routes
  ]
})

export default router
