<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <Affiche />
    <Caroussel />
    <Video class="mx-auto flex w-1/2 flex-col items-center" />
    <CardBloc />
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