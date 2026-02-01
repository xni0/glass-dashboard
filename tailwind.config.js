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
        'purple': '#C084FC',

        'bg-black': {
          '20': 'rgba(0, 0, 0, 0.2)',
          '30': 'rgba(0, 0, 0, 0.3)',
        },

        'border-gray': '#D1D5DB',

        'text-gray': {
          '300': 'rgba(209, 213, 219, 0.5)',
        },
        
        'text-white': '#FFFFFF',

        'bg-red-500': {
          'default': 'rgba(246, 56, 56, 0.07)',   
          'border': 'rgba(240, 134, 134, 0.52)',  
          'font-red': 'rgba(246, 175, 175, 0.88)',
        }
      },
      
      borderRadius: {
        'glass-sm': '12px', // Este es el que usan tus inputs
        'glass-lg': '24px',
        // ACTUALIZADO: Cambiado a 12px para coincidir exactamente con los inputs
        'glass-btn': '12px',
      },
      
      boxShadow: {
        'glass': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        // Sombra inferior definida (como pediste antes)
        'purple-glow': '0 15px 20px -5px rgba(192, 132, 252, 0.6)',
      },
      backdropBlur: {
        'glass': '12px',
      }
    },
  },
  plugins: [],
}