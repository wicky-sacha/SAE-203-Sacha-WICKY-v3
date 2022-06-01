<template>
  <div class="w-full max-w-xs">
    <form class="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="email"> Adresse e-mail </label>
        <input
          class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="email"
          type="text"
          placeholder="E-mail"
        />
      </div>
      <div class="mb-6">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="password"> Mot de passe </label>
        <input
          class="
            focus:shadow-outline
            mb-3
            w-full
            appearance-none
            rounded
            border border-red-500
            py-2
            px-3
            leading-tight
            text-gray-700
            shadow
            focus:outline-none
          "
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-xs italic text-red-500">Créez un mot de passe s'il vous plaît.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Connexion
        </button>
        <a class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800" href="#"> Oublié? </a>
      </div>
    </form>
  </div>
</template>