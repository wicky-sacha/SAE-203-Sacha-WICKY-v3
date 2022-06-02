<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <img src="../assets/bandeau-les-3.png" alt="bandeau les 3 cirques" />
    <BlocAbout2 />
    <div class="flex justify-center p-2">
      <iframe
        class="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59496.899810609655!2d55.71124308592789!3d-21.2494386849612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21786c2d20c0dd29%3A0x56194efbb82986f6!2sPiton%20de%20la%20Fournaise!5e0!3m2!1sen!2sfr!4v1654189771894!5m2!1sen!2sfr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import BlocAbout from "../components/BlocAbout.vue";
import BlocAbout2 from "../components/BlocAbout2.vue";
import fondImage from "../assets/fond.png?url";
export default {
  data: function () {
    return {
      fondImage,
    };
  },

  components: { Navi, Bottom, BlocAbout, BlocAbout2 },
};
</script>