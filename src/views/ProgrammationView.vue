<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <BandeauProg />
    <div class="tri-color grid auto-rows-[40rem] grid-cols-3 content-center items-center">
      <card nom="KANYE WEST" :image="imageKanye" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="TOM YORKE" :image="imageTom" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="TOM YORKE" :image="imageFrank" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="AGAR AGAR" :image="imageAgar" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="LANA DEL REY" :image="imageLana" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="PLAYBOI CARTI" :image="imageCarti" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="JUSTICE" :image="imageJustice" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="TOOL" :image="imageTool" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="ARCTIC MONKEYS" :image="imageAc" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="CHET FAKER" :image="imageChet" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="FIONA APPLE" :image="imageFiona" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="GRIMES" :image="imageGrimes" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="D'ANGELO" :image="imageAngelo" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="SADE" :image="imageSade" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="KENDRICK LAMAR" :image="imageKen" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />
    </div>

    <Bottom />
  </main>
</template>

<style scoped>
.tri-color > *:nth-child(3n + 1) {
  background: #000;
}
.tri-color > *:nth-child(3n + 2) {
}
.tri-color > *:nth-child(3n + 3) {
}
</style>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import fondImage from "../assets/fond.png?url";
import BandeauProg from "../components/BandeauProg.vue";
import card from "../components/card.vue";
import imageKanye from "../assets/artistes/kanye.png?url";
import imageTom from "../assets/artistes/tom.png?url";
import imageFrank from "../assets/artistes/frank.png?url";
import imageAgar from "../assets/artistes/agar.png?url";
import imageLana from "../assets/artistes/lana.png?url";
import imageCarti from "../assets/artistes/carti.png?url";
import imageJustice from "../assets/artistes/justice.png?url";
import imageTool from "../assets/artistes/tool.png?url";
import imageAc from "../assets/artistes/ac.png?url";
import imageChet from "../assets/artistes/chet.png?url";
import imageFiona from "../assets/artistes/fiona.png?url";
import imageGrimes from "../assets/artistes/grimes.png?url";
import imageAngelo from "../assets/artistes/angelo.png?url";
import imageSade from "../assets/artistes/sade.png?url";
import imageKen from "../assets/artistes/ken.png?url";

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
      imageJustice,
      imageTool,
      imageAc,
      imageChet,
      imageFiona,
      imageGrimes,
      imageAngelo,
      imageSade,
      imageKen,
    };
  },

  components: { Navi, Bottom, BandeauProg, card },
};
</script>