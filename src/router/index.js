import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import AboutView from '../views/AboutView.vue'
import ArtistView from '../views/ArtistView.vue'
import BilletterieView from '../views/BilletterieView.vue'
import ContactView from '../views/ContactView.vue'
import LegalView from '../views/LegalView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import PageNotFoundView from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/artist', name: 'Artist', component: ArtistView },
    { path: '/billetterie', name: 'Billetterie', component: BilletterieView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/legal', name: 'Legal', component: LegalView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },
    { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFoundView },
    // ici les autre routes
  ]
})

export default router
