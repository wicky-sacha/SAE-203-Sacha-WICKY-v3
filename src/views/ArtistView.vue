<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <Artist class="mx-auto flex flex-col items-center" />
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import fondImage from "../assets/bg-artiste.png?url";
import Artist from "../components/Artist.vue";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, Artist },
};
</script>