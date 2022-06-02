<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <BandeauBill />
    <Billet />
    <Billet2 />
    <Billet3 />
    <Bottom />
  </main>
</template>



<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import fondImage from "../assets/fond.png?url";
import BandeauBill from "../components/BandeauBill.vue";
import Forfait1 from "../components/Forfait1.vue";
import Forfait2 from "../components/Forfait2.vue";
import Forfait3 from "../components/Forfait3.vue";
import Billet from "../components/Billet.vue";
import Billet2 from "../components/Billet2.vue";
import Billet3 from "../components/Billet3.vue";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, Forfait1, BandeauBill, Billet, Billet2, Billet3 },
};
</script>