<template>
  <div class="md:w-100 mx-auto w-auto p-20 md:max-w-full">
    <div class="border border-gray-300 p-6 sm:rounded-md">
      <form method="POST" action="https://herotofu.com/start" class="">
        <label class="mb-6 block">
          <span class="text-gray-700">Prénom Nom</span>
          <input
            type="text"
            name="name"
            class="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
            "
            placeholder="Prénom Nom"
          />
        </label>
        <br />
        <label class="mb-6 block">
          <span class="text-gray-700">Adresse E-mail</span>
          <input
            name="email"
            type="email"
            class="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
            "
            placeholder="email@example.com"
            required
          />
        </label>
        <br />
        <label class="mb-6 block">
          <span class="text-gray-700">Message</span>
          <textarea
            name="message"
            class="
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
            "
            rows="3"
            placeholder="Écrivez votre message"
          ></textarea>
        </label>
        <br />
        <div class="mb-6">
          <button type="submit" class="flex content-center bg-gray-700 py-2 px-4 text-white">ENVOYER</button>
        </div>
      </form>
    </div>
  </div>
</template>