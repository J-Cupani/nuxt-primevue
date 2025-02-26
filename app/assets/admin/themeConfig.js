import {definePreset} from "@primeuix/themes"
import Aura from "@primeuix/themes/aura"

const CustomPresetPrimeVue = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}'
    },
    surface: {
      0: '{zinc.0}',
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
      },
      dark: {
        primary: {
          color: '{primary.500}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}'
        },
      }
    }
  }
})

export default CustomPresetPrimeVue