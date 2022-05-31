<template>
  <nav class="flex flex-wrap items-center justify-between bg-gray-100 p-6">
    <div class="mr-6 flex flex-shrink-0 items-center text-gray-700">
      <a href="./index.html"><img class="w-20" src=".././assets/logo.png" alt="Logo PNG" /></a>
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
        <a href="./programmation.html" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"> PROGRAMMATION </a>
        <a href="./billeterie.html" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"> BILLETTERIE </a>
        <a href="./les-trois-cirques.html" class="mt-4 block text-black hover:text-black lg:mt-0 lg:inline-block"> LES TROIS CIRQUES </a>
      </div>
    </div>
  </nav>
</template>