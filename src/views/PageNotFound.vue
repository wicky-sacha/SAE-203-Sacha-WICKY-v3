<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <div class="grid auto-rows-[10rem] grid-cols-1 content-center justify-items-center p-20">
      <h1 class="text-2xl">ERREUR 404 - PAGE INTROUVABLE</h1>
      <img class="text-center" src="../assets/logo.png" alt="" />
      <p class="text-2xl">On dirait que vous vous êtes perdu ...</p>
    </div>
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import fondImage from "../assets/fond.png?url";

export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom },
};
</script>