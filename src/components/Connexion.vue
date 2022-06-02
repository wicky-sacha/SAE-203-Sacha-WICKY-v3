<template>
  <div>
    <div class="title center p-2">CONNEXION</div>
    <hr />

    <div class="w-full max-w-xs">
      <form @submit.prevent="onCnx()" class="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div class="mb-4">
          <div class="input-group-prepend">
            <button class="mb-2 block text-sm font-bold text-gray-700" for="username">Email :</button>
          </div>
          <input
            class="
              focus:shadow-outline
              w-full
              appearance-none
              rounded
              border
              py-2
              px-3
              leading-tight
              text-gray-700
              shadow
              focus:outline-none
            "
            type="text"
            v-model="user.email"
            required
          />
        </div>
        <div class="input-group mb-6">
          <div class="input-group-prepend">
            <button class="mb-2 block text-sm font-bold text-gray-700">Mot de passe :</button>
            <p class="text-xs italic text-red-500">Veuillez entrer votre mot de passe.</p>
          </div>
          <input
            class="
              focus:shadow-outline
              mb-3
              w-full
              appearance-none
              rounded
              border border-red-500
              py-2
              px-3
              leading-tight
              text-gray-700
              shadow
              focus:outline-none
            "
            type="password"
            v-model="user.password"
            required
          />
        </div>
        <div class="alert alert-warning mb-3 text-center" v-if="message != null">
          {{ message }}
        </div>
        <div>
          <button class="float-left" @click="onDcnx()">Deconnexion</button>
          <button variant="dark" class="float-right" type="submit">Connexion</button>
        </div>
      </form>
    </div>

    <hr class="mb-5" style="clear: both" />
  </div>
</template>
          
<script>
// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

export default {
  data() {
    // Données de la vue
    return {
      user: {
        // user se connectant
        email: null,
        password: null,
      },
      message: null, // Message de connexion
      listePays: [], // Liste des pays - collection pays Firebase
      nom: null, // Pour la création d'un nouveau pays
      listePaysSynchro: [], // Liste des pays synchronisée - collection pays de Firebase
    };
  },

  mounted() {
    // Montage de la vue
    // Rechercher si un user est déjà connecté
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }

    // Appel de la liste des pays
    this.getPays();

    // Appel de la liste des pays synchronisée
    this.getPaysSynchro();
  },

  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK
          console.log("user connecté", response.user);
          this.user = response.user;
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user deconnecté ", this.user);
          this.message = "user non connecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    // Async permet de qualifier cette fonction d'asynchrone
    // et oblige à l'attente de résultats de await
    async getPays() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays = collection(firestore, "pays");
      // Obtenir tous les documents de la collection pays
      // await pour attendre l'obtention des résultats
      const query = await getDocs(dbPays);
      query.forEach((doc) => {
        let pays = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listePays.push(pays);
      });
    },

    async getPaysSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays = collection(firestore, "pays");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbPays, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listePaysSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async createPays() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays = collection(firestore, "pays");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbPays, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updatePays(pays) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "pays", pays.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: pays.nom,
      });
    },

    async deletePays(pays) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "pays", pays.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>
    
<style>
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
</style>



