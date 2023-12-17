/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{tsx, jsx}', './components/**/*.{tsx, jsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
