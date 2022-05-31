<template>
  <main>
    <Navi />
    <img src="../assets/bandeau-legal.png" alt="bandeau legal" />

    <p class="text-l p-20">
      Identité de l’entreprise : Étudiants Sacha WICKY <br />
      Département MMI Montbéliard - 4 Place Tharradin 25200 Montbéliard <br />
      <br />
      Mail ou numéro de téléphone pour contacter votre entreprise. <br />
      Adresse e-mail du site : lest-trois-cirques@reunion.fr <br />
      Adresse e-mail de Sacha WICKY : sacha.wicky@edu.univ-fcomte.fr <br />
      Adresse e-mail de l’entreprise : dut-mmi-montbeliard@univ-fcomte.fr <br />
      Numéro de l’entreprise : +33 (0)3 81 99 47 34 <br />
      <br />
      Propriété intellectuelle des illustrations du site : Sacha WICKY <br />
      <br />
      Rédacteur en chef : Sacha WICKY <br />
      <br />
      Mentions relatives à l’hébergeur du site : <br />
      Infomaniak <br />
      Dénomination sociale : Infomaniak Entertainment <br />
      Adresse siège sociale : Rue Eugène-Marziano 25 1227 Les Acacias Suisse <br />
      Fax : Fax +41 844551156 <br />
    </p>
    <Bottom />
  </main>
</template>

<script>
import Navi from "../components/Navi.vue";
import Bottom from "../components/Bottom.vue";
export default {
  components: { Navi, Bottom },
};
</script>