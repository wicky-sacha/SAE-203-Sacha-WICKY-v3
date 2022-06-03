<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <Affiche class="grid auto-rows-[40rem] grid-cols-2 content-center justify-items-center" />
    <Caroussel />
    <Video class="mx-auto flex max-w-7xl flex-col items-center" />
    <CardBloc class="grid auto-rows-[40rem] grid-cols-2 content-center justify-items-center" />
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
import fondImage from "../assets/fond.png?url";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, Affiche, Caroussel, Video, CardBloc },
};
</script>