<template>
  <div>
    <div class="flex h-full w-full items-center justify-center py-24 px-4 sm:py-8">
      <div class="relative flex w-full items-center justify-center">
        <button
          @click="goPrev"
          aria-label="slide backward"
          class="
            absolute
            left-0
            z-30
            ml-10
            cursor-pointer
            focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
          "
          ref="prev"
        >
          <svg class="dark:text-white" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div class="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
          <div ref="slider" class="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8">
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/kanye.png" alt="black chair and white table" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>

            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/tom.png" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/frank.png" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/agar.png" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/lana.png" alt="black chair and white table" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/carti.png" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/justice.png" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/ac.png" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/chet.png" alt="black chair and white table" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src=".././assets/fiona.png" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src="#" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
            <div class="relative flex w-full flex-shrink-0 sm:w-auto">
              <img src="#" alt="sitting area" class="w-full object-cover object-center" />
              <div class="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                <div class="flex h-full items-end pb-6"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          @click="goNext"
          aria-label="slide forward"
          class="absolute right-0 z-30 mr-10 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          ref="next"
        >
          <svg class="dark:text-white" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      defaultTransform: 0,
    };
  },
  methods: {
    goNext() {
      this.defaultTransform = defaultTransform - 398;
      //var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
    },
    goPrev() {
      //var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
      else this.defaultTransform = defaultTransform + 398;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
    },
  },
};
</script>
