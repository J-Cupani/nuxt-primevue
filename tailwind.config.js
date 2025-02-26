const tailwindcssPrimeui = require('tailwindcss-primeui');

module.exports = {
  darkMode: ['class', '[class*="app-dark"]'],
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/composables/**/*.{js,ts}',
    './app/plugins/**/*.{js,ts}',
    './app/App.{js,ts,vue}',
    './app/app.{js,ts,vue}',
    './app/error.{js,ts,vue}',
    'node_modules/primevue/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'f-primary': '#FF6B6B', // Rouge vif uniquement pour la partie publique
        'f-secondary': '#1A535C', // Bleu sombre pour la partie publique
        'f-accent': '#FF9F1C', // Orange vif
        'f-dark': '#2E2E2E', // Gris foncé
        'f-light': '#F0F0F0', // Gris clair
        'f-danger': '#D7263D', // Rouge danger
        'f-success': '#4ECDC4', // Vert menthe
        'f-warning': '#FFCC00', // Jaune vif
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px'
    }
  },
  plugins: [tailwindcssPrimeui]
};