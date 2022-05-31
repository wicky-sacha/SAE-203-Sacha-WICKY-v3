<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <BandeauProg />
    <Prog1 />
    <Prog2 />
    <Prog3 />
    <Prog4 />
    <Prog5 />
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import fondImage from "../assets/fond.png?url";
import Prog1 from "../components/Prog1.vue";
import Prog2 from "../components/Prog2.vue";
import Prog3 from "../components/Prog3.vue";
import Prog4 from "../components/Prog4.vue";
import Prog5 from "../components/Prog5.vue";
import BandeauProg from "../components/BandeauProg.vue";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, Prog1, Prog2, Prog3, Prog4, Prog5, BandeauProg },
};
</script>