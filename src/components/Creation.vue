<template>
  <div>
    <h2 class="title center text-blaxk text-3xl font-semibold">Saisie d'un artiste</h2>
    <hr />
    <div class="row">
      <br />
      <form @submit.prevent="saisie" class="container">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Nom</span>
          </div>
          <input
            type="text"
            v-model="nom"
            class="
              form-control
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
            placeholder="Nom de l'artiste"
          />
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Genre</span>
          </div>
          <select
            v-model="genre"
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
          >
            <option value="" disabled selected>Sélectionner un genre</option>
            <option v-for="genre in listeGenre" :key="genre">{{ genre }}</option>
          </select>
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Pays</span>
          </div>
          <select
            v-model="pays"
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
          >
            <option value="" disabled selected>Sélectionner un pays</option>
            <option v-for="pays in listePays" :key="pays">{{ pays }}</option>
          </select>
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Date</span>
          </div>
          <select
            v-model="date"
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
          >
            <option value="" disabled selected>Sélectionner une date</option>
            <option v-for="date in listeDate" :key="date">{{ date }}</option>
          </select>
        </div>
        <br />

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Scene</span>
          </div>
          <select
            v-model="scene"
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
          >
            <option value="" disabled selected>Sélectionner une scene</option>
            <option v-for="scene in listeScene" :key="scene">{{ scene }}</option>
          </select>
        </div>
        <br />

        <input type="submit" value="Valider" class="p-2 text-2xl" />
      </form>
    </div>
    <hr />

    <div class="row">
      <ol>
        <h2 class="title center text-blaxk text-3xl font-semibold">Liste des artistes saisis :</h2>
        <li v-for="artist in liste" :key="artist.id">
          Nom : {{ artist.nom }}<br />
          Genre : {{ artist.genre }} <br />
          Pays : {{ artist.pays }} <br />
          Date : {{ artist.date }} <br />
          Scene :
          {{ artist.scene }}
        </li>
      </ol>
    </div>
    <hr />
  </div>
</template>

<script>
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

export default {
  data() {
    return {
      // Liste à remplir d'artistes
      liste: [],
      // Définition d'un artiste
      id: 0,
      nom: "",
      pays: "",
      genre: "",
      // Liste des pays
      listePays: ["Angleterre", "Australie", "Canada", "France", "USA"],
      // liste des date
      listeDate: ["Mardi 12 juillet 2022", "Mercredi 13 juillet 2022", "Jeudi 14 juillet 2022"],
      // liste des genres
      listeGenre: ["Hip-Hop", "Electro", "Metal", "Rock", "Jazz", "Pop"],
      // liste des scenes
      listeScene: ["Grande Scene", "La Plage", "Le Chapiteau"],
    };
  },
  methods: {
    saisie: function () {
      // Initialisation de l'artiste à mettre dans le tableau
      let artist = {
        id: 0,
        nom: "",
        genre: "",
        pays: "",
        date: "",
        scene: "",
      };
      // Calcul du id
      this.id++;
      // On renseigne l'artiste
      artist.id = this.id;
      artist.nom = this.nom;
      artist.genre = this.genre;
      artist.pays = this.pays;
      artist.date = this.date;
      artist.scene = this.scene;
      // On le charge dans le tableau
      this.liste.push(artist);
    },
  },
};
</script>




