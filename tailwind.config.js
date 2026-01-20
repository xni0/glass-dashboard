/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // --- TUS VARIABLES DE FIGMA ---
        
        // Grupo: Colores / bg-black (Superficies oscuras transparentes)
        'bg-black': {
          '20': 'rgba(0, 0, 0, 0.2)', // Tu variable "20" (20%)
          '30': 'rgba(0, 0, 0, 0.3)', // Tu variable "30" (30%)
        },

        // Grupo: Colores / border-gray (Borde gris claro)
        // Nota: En Figma es sólido (#D1D5DB). Si lo ves muy fuerte, usa 'border-border-gray/30' en el className.
        'border-gray': '#D1D5DB',

        // Grupo: Colores / text-gray (Texto secundario)
        'text-gray': {
          '300': 'rgba(209, 213, 219, 0.5)', // Tu variable con 50% de opacidad
        },
        
        // Variable suelta para texto blanco
        'text-white': '#FFFFFF',

        // Grupo: Colores / bg-red-500 (Estados de Error)
        'bg-red-500': {
          'default': 'rgba(246, 56, 56, 0.07)',    // Fondo rojo muy suave (7%)
          'border': 'rgba(240, 134, 134, 0.52)',   // Borde rojo medio (52%)
          'font-red': 'rgba(246, 175, 175, 0.88)', // Texto rojo legible (88%)
        }
      },
      // Tus radios de borde (mantengo los que definimos visualmente)
      borderRadius: {
        'glass-sm': '12px',
        'glass-lg': '24px',
      },
      // Tus efectos
      boxShadow: {
        'glass': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        'glass': '12px',
      }
    },
  },
  plugins: [],
}