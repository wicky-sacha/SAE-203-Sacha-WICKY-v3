<template>
  <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-pink-500">
    <RouterLink to="/artist">
      <img class="rounded-t-lg" :src="image" alt="photo" />
    </RouterLink>
    <div class="p-5">
      <RouterLink to="/artist">
        <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{{ nom }}</h5>
      </RouterLink>
      <p class="mb-3 text-center font-normal text-gray-700 dark:text-black">{{ pays }}</p>
      <p class="mb-3 text-center font-normal text-gray-700 dark:text-black">{{ date }}</p>
      <p class="mb-3 text-center font-normal text-gray-700 dark:text-black">{{ scene }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    nom: String,
    pays: String,
    date: String,
    scene: String,
  },
};
</script>
