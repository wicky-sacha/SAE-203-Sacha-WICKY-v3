<template>
  <main class="w-fullh-full bg-cover bg-left bg-no-repeat" :style="`background-image: url('${fondImage}')`">
    <Navi />
    <BlocAbout class="flex w-1 content-center" />
    <div class="flex justify-center p-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476206.837400574!2d55.4616061940215!3d-21.177618108987236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217866563457883d%3A0xc3a134b698571f80!2sSainte%20Rose%2097439%2C%20R%C3%A9union!5e0!3m2!1sen!2sfr!4v1654158392590!5m2!1sen!2sfr"
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