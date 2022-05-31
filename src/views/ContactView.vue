<template>
  <main>
    <Navi />
    <BandeauContact />
    <Formulaire />
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
import BandeauContact from "../components/BandeauContact.vue";
import Formulaire from "../components/Formulaire.vue";
export default {
  components: { Navi, Bottom, BandeauContact, Formulaire },
};
</script>