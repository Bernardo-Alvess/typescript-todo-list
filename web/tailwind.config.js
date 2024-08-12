/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'darker-purple': '#0D0714',
        'light-purple': '#9E78CF',
        'grayish-purple': '#1D1825',
        'dark-purple': '#15101C'
      },
    },
  },
  plugins: [],
}

