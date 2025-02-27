import CustomPresetPrimeVue from './app/assets/admin/themeConfig'

export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    head: {
      title: 'Sakai Vue',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { charset: 'UTF-8' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/lato' }
      ]
    },
  },
  nitro: {
    preset: 'vercel-edge', // Utilise l'adaptateur pour Vercel
  },
  compatibilityDate: '2024-11-01',
  srcDir: 'app/',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@nuxt/image'],

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  css: [
    'primeicons/primeicons.css'
  ],

  build: {
    transpile: ['primevue'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  primevue: {
    options: {
      theme: {
        preset: CustomPresetPrimeVue,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    }
  },

  vite: {
    resolve: {
      alias: {
        '@images': '/app/assets/images',
        '@assets': '/app/assets',
        '@fonts': '/app/assets/fonts'
      }
    }
  },

  image: {
    format: ['webp'],
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  }
})