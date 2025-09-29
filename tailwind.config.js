/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        sweetener: {
          50: '#fefcf9',
          100: '#fdf8f2',
          200: '#faf0e6',
          300: '#f7e5d3',
          400: '#f4d6b4',
          500: '#f0c491',
          600: '#e8b074',
          700: '#d8b186',
          800: '#d49270',
          900: '#bd7d62',
          cream: '#f7ebdb',
          peach: '#f4d6b4',
          tan: '#d8b186',
          brown: '#d49270',
          dark: '#bd7d62',
        },
        // Alias para facilitar el uso
        cream: '#f7ebdb',
        peach: '#f4d6b4',
        tan: '#d8b186',
        brown: '#d49270',
        dark: '#bd7d62',
      },
      backgroundImage: {
        'sweetener-gradient': 'linear-gradient(135deg, #f7ebdb 0%, #f4d6b4 25%, #d8b186 50%, #d49270 75%, #bd7d62 100%)',
        'sweetener-soft': 'linear-gradient(135deg, #f7ebdb 0%, #f4d6b4 100%)',
        'sweetener-warm': 'linear-gradient(135deg, #f4d6b4 0%, #d49270 100%)',
      },
      boxShadow: {
        'sweetener': '0 4px 6px -1px rgba(189, 125, 98, 0.1), 0 2px 4px -1px rgba(189, 125, 98, 0.06)',
        'sweetener-lg': '0 10px 15px -3px rgba(189, 125, 98, 0.1), 0 4px 6px -2px rgba(189, 125, 98, 0.05)',
        'sweetener-xl': '0 20px 25px -5px rgba(189, 125, 98, 0.1), 0 10px 10px -5px rgba(189, 125, 98, 0.04)',
      },
      animation: {
        'sweetener-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sweetener-bounce': 'bounce 1s infinite',
      }
    },
  },
  plugins: [],
}
