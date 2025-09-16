/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        sweetener: {
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
      }
    },
  },
  plugins: [],
}
