<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <BlocAbout class="flex w-1 content-center" />
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import BlocAbout from "../components/BlocAbout.vue";
import fondImage from "../assets/fond.png?url";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, BlocAbout },
};
</script>