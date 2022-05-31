<template>
  <main>
    <Navi />
    <Affiche />
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import Affiche from "../components/Affiche.vue";
export default {
  components: { Navi, Bottom, Affiche },
};
</script>