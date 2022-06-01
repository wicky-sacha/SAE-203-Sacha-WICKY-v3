<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <BandeauProg />
    <div class="p flex justify-end p-6 pr-20">
      <SearchBar />
    </div>

    <div class="tri-color grid auto-rows-[40rem] grid-cols-3 content-center items-center">
      <card nom="KANYE WEST" :image="imageKanye" pays="USA" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="TOM YORKE" :image="imageTom" pays="Angleterre" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="FRANK OCEAN" :image="imageFrank" pays="USA" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="AGAR AGAR" :image="imageAgar" pays="France" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="LANA DEL REY" :image="imageLana" pays="USA" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="PLAYBOI CARTI" :image="imageCarti" pays="USA" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="JUSTICE" :image="imageJustice" pays="France" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="TOOL" :image="imageTool" pays="USA" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="ARCTIC MONKEYS" :image="imageAc" pays="Angleterre" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="CHET FAKER" :image="imageChet" pays="Australie" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="FIONA APPLE" :image="imageFiona" pays="USA" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="GRIMES" :image="imageGrimes" pays="Canada" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />

      <card nom="D'ANGELO" :image="imageAngelo" pays="USA" date="Mardi 12 juillet 2022" scene="Grande Scène" />
      <card nom="SADE" :image="imageSade" pays="Angleterre" date="Mercredi 13 juillet 2022" scene="La Plage" />
      <card nom="KENDRICK LAMAR" :image="imageKen" pays="USA" date="Jeudi 14 juillet 2022" scene="Le Chapiteau" />
    </div>

    <Bottom />
  </main>
</template>

<style scoped>
.tri-color > *:nth-child(3n + 1) {
  background: #db2777;
}
.tri-color > *:nth-child(3n + 2) {
  background: #4ade80;
}
.tri-color > *:nth-child(3n + 3) {
  background: #fde047;
}
</style>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import fondImage from "../assets/fond.png?url";
import BandeauProg from "../components/BandeauProg.vue";
import SearchBar from "../components/SearchBar.vue";

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

  components: { Navi, Bottom, BandeauProg, card, SearchBar },
};
</script>