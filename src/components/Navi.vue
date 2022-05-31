<template>
  <nav class="flex flex-wrap items-center justify-between bg-gray-100 p-6">
    <div class="mr-6 flex flex-shrink-0 items-center text-gray-700">
      <RouterLink to="../views/AccueilView.vue"><img class="w-20" src=".././assets/logo.png" alt="Logo PNG" /></RouterLink>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center rounded border border-gray-100 px-3 py-2 text-black hover:border-black hover:text-black">
        <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
      <div class="text-sm lg:flex-grow">
        <RouterLink to="../views/ProgrammationView.vue" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"
          >PROGRAMMATION</RouterLink
        >
        <RouterLink to="../views/BilletterieView.vue" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"
          >BILLETTERIE</RouterLink
        >
        <RouterLink to="../views/AboutView.vue" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"
          >LES TROIS CIRQUES</RouterLink
        >
      </div>
    </div>
  </nav>
</template>