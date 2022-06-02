<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <div class="flex justify-center p-2 pb-48"><Connexion /></div>
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import Affiche from "../components/Affiche.vue";
import Caroussel from "../components/Caroussel.vue";
import Video from "../components/Video.vue";
import CardBloc from "../components/CardBloc.vue";
import Connexion from "../components/Connexion.vue";
import fondImage from "../assets/fond.png?url";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, Connexion },
};
</script>