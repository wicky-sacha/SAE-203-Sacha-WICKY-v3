<template>
  <div class="grid grid-cols-2 content-center p-20">
    <div class="max-w-sm overflow-hidden rounded border-8 border-gray-200 bg-blue-600 shadow-lg">
      <h2 class="bg-yellow-300 text-center text-xl font-bold">FORFAIT 1J</h2>
      <div class="flex flex-col items-center justify-center">
        <div class="px-6 py-4">
          <p class="text-sm font-light text-gray-700">
            Le forfait 1 jour est un forfait découverte. Avec celui-ci vous pourrez vous rendre au festival entre mardi 12 juillet et samedi
            16 juillet 2022. Le tarif 1 jour est identique peu importe le jour que vous souhaitez réserver. C’est le forfait idéal pour une
            première expérience !
          </p>
        </div>
        <RouterLink to="/billetterie" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"
          ><button class="flex content-center bg-gray-700 py-2 px-4 text-white">80€</button>
        </RouterLink>
      </div>
    </div>

    <div class="max-w-sm overflow-hidden rounded border-8 border-gray-200 bg-green-400 shadow-lg">
      <h2 class="bg-yellow-300 text-center text-xl font-bold">FORFAIT 5J</h2>
      <div class="flex flex-col items-center justify-center">
        <div class="px-6 py-4">
          <p class="text-sm font-light text-gray-700">
            Le forfait 5 jours est le pass complet d’accès au festival. Avec celui-ci vous pourrez faire la fête du mardi 12 juillet au
            samedi 16 juillet 2022. Vous aurez également accès au camping gratuit pour poser votre tente et vous reposer ! Quoi de mieux que
            le forfait 5 jours pour profiter à fond du festival ?!
          </p>
        </div>
        <RouterLink to="/billetterie" class="mt-4 mr-4 block text-black hover:text-black lg:mt-0 lg:inline-block"
          ><button class="flex content-center bg-gray-700 py-2 px-4 text-white">350€</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>