/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx, jsx}', './components/**/*.{tsx, jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo_2)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
