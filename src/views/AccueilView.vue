<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" style="background-image: url('src/assets/fond.png')">
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
export default {
  components: { Navi, Bottom, Affiche, Caroussel, Video, CardBloc },
};
</script>