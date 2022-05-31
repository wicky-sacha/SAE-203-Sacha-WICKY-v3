module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      backgroundImage: {
        'pack-train': "url('../public/images/fond.png')",
      },

      "fontFamily": {
        'sans': ['HelveticaNeue', 'Arial', 'sans-serif'],
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  },
  plugins: [],
}
