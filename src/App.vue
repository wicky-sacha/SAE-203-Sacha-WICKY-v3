<template>
  <header>
    <nav>
      <RouterLink to="/" class="text-blue-600 underline"></RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { IconLogo, FilmIcon },
};
</script>