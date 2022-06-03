<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <div class="p-5">
      <Artist2 class="mx-auto flex flex-col items-center" />
    </div>
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import fondImage from "../assets/bg-artiste.png?url";
import Artist2 from "../components/Artist2.vue";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, Artist2 },
};
</script>