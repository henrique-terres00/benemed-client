/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#38B6FF',
          light: '#5FC4FF',
          dark: '#2B9FE6'
        },
        secondary: {
          DEFAULT: '#8566FB',
          light: '#9B82FF',
          dark: '#6E4FE6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
