<template>
  <div class="grid grid-cols-2 gap-2 p-3">
    <Video />
    <div class="bg-blue-400">
      <h2 class="text-start p-2 text-3xl font-semibold">UN PROJET FOU!</h2>
      <p class="text-start p-2 text-sm">
        C’est en 2020 pendant la période de confinement que nous avons eu l’idée de créer un festival qui permettra de relancer le tourisme
        dès la réouverture des frontières. Ce projet fou vise à attirer des festivaliers à l’Île de la Réunion afin qu’ils puissent
        découvrir ses beaux paysages tout en faisant la fête. Les Trois Cirques est un festival original comme il preend place dans une lieu
        exceptionnel, Sainte-Rose, ville situé entre les contrées sauvages et le littoral réunionais. En vous rendant à la Réunion entre le
        12 juillet et le 16 juillet 2022, vous aurez l’occaison d’assister à des concerts inédits regroupant les plus grandes stars de la
        musique interbationnale comme, KANYE WEST, PAUL MCCARTNEY, LANA DEL REY, KENDRICK LAMAR et tant d’autres artistes incroyables !
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-2 p-3">
    <div class="bg-blue-400">
      <h2 class="text-start p-2 text-3xl font-semibold">UN LIEU INÉDIT!</h2>
      <p class="text-start p-2 text-sm">
        Située sur le territoire communal, la Pointe des Cascades est le point le plus à l'est de La Réunion. L'île formant une région
        française à part entière, c'est aussi le point le plus oriental de France. L'île étant par ailleurs une région ultrapériphérique de
        l'Union européenne, c'est également le point le plus à l'est sur lequel l'organisation européenne est compétente. Le territoire
        communal est limitrophe de ceux de La Plaine-des-Palmistes, Saint-Benoît, Saint-Joseph, Saint-Philippe et du Tampon. Il est délimité
        par la Rivière de l'Est au nord et le grand Brûlé au sud. Le volcan actif du Piton de la Fournaise est situé en partie sur le
        territoire de la commune, qui est donc sujette à de fréquentes éruptions et coulées de laves, notamment les lieux-dits proches de la
        caldeira volcanique que sont Bois Blanc et Piton-Sainte-Rose, qui fut partiellement ensevelit lors de l'éruption de mars 1977.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <img src="../assets/ile.png" alt="ile" />
      <img src="../assets/ile2.png" alt="ile" />
    </div>
  </div>
</template>

<script>
import Video from "../components/Video.vue";
export default {
  components: { Video },
};
</script>