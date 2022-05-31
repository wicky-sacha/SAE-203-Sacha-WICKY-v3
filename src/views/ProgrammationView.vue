<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <BandeauProg />
    <Prog1 />
    <Prog2 />
    <Prog3 />
    <Prog4 />
    <Prog5 />
    <div class="grid auto-rows-[40rem] grid-cols-3 content-center items-center">
      <card nom="KANYE WEST" :image="imageKanye" date="Mardi 12 juillet 2022" />
      <card nom="TOM YORKE" :image="imageTom" date="Mercredi 13 juillet 2022" />
      <card nom="TOM YORKE" :image="imageFrank" date="Jeudi 14 juillet 2022" />
      <card nom="AGAR AGAR" :image="imageAgar" date="Mardi 12 juillet 2022" />
      <card nom="LANA DEL REY" :image="imageLana" date="Mercredi 13 juillet 2022" />
      <card nom="PLAYBOI CARTI" :image="imageCarti" date="Jeudi 14 juillet 2022" />
    </div>

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
import card from "../components/card.vue";
import imageKanye from "../assets/artistes/kanye.png?url";
import imageTom from "../assets/artistes/tom.png?url";
import imageFrank from "../assets/artistes/frank.png?url";
import imageAgar from "../assets/artistes/agar.png?url";
import imageLana from "../assets/artistes/lana.png?url";
import imageCarti from "../assets/artistes/carti.png?url";

export default {
  data: function () {
    return {
      fondImage,
      imageKanye,
      imageTom,
      imageFrank,
      imageAgar,
      imageLana,
      imageCarti,
    };
  },

  components: { Navi, Bottom, Prog1, Prog2, Prog3, Prog4, Prog5, BandeauProg, card },
};
</script>