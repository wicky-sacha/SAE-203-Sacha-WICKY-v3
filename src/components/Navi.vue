<template>
  <div>
    <div class="bg-gray-100">
      <nav class="container mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <RouterLink to="/"><img class="w-20" src=".././assets/logo.png" alt="Logo PNG" /></RouterLink>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class="text-gray-800 hover:text-gray-400 focus:text-gray-400 focus:outline-none">
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="mt-8 flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10"
        >
          <RouterLink to="/programmation" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"
            >PROGRAMMATION</RouterLink
          >
          <RouterLink to="/billetterie" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block">BILLETTERIE</RouterLink>
          <RouterLink to="/about" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block">LES TROIS CIRQUES</RouterLink>
          <RouterLink to="/contact" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block">CONTACT</RouterLink>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>