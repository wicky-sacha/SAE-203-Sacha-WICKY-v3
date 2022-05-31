<template>
  <footer class="bg-gray-300 p-4 shadow md:flex md:items-center md:justify-between md:p-6">
    <span class="text-sm text-black sm:text-center"
      >© 2022 <a href="https://regionreunion.com/" class="hover:underline">Région Réunion</a> /
      <a href="https://sachawicky.com ">Graphic Design & Webdesign : Sacha Wicky</a>
    </span>
    <ul class="mt-3 flex flex-wrap items-center text-sm text-black sm:mt-0">
      <li>
        <RouterLink to="/contact" class="mr-4 hover:underline md:mr-6">Nous Contacter</RouterLink>
      </li>
      <li>
        <RouterLink to="/legal" class="mr-4 hover:underline md:mr-6">Politique de confidentialité</RouterLink>
      </li>
    </ul>
  </footer>
</template>