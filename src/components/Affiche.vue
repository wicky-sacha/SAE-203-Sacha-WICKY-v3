<template>
  <div class="grid grid-cols-2 p-20">
    <img class="w-full max-w-sm overflow-hidden rounded shadow-lg" src=".././assets/affiche.png" alt="Affiche" />

    <div class="max-w-sm overflow-hidden rounded border-8 border-gray-200 bg-blue-400 shadow-lg">
      <h2 class="bg-yellow-300 text-center text-xl font-bold">LE FESTIVAL</h2>
      <div class="flex flex-col items-center justify-center">
        <div class="px-6 py-4">
          <p class="text-base font-light text-gray-700">
            Mardi 12 juillet 2022, le Festival les Trois Cirques ouvrira les portes de sa 1ère édition. Rien que de d’y penser, on en
            frissonne déjà. Après son report en raison de la Covid-19, le festival se déroulera sur 5 jours, une programmation regroupant
            différents genres musicaux, un camping gratuit et l’ambition assumée de rassembler la jeunesse. La fête est de retour sur l’Île
            de la Réunion !
          </p>
        </div>
        <RouterLink to="/programmation"><Bouton /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Bouton from "./Bouton.vue";
export default {
  components: { Bouton },
};
</script>