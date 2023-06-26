module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [],
  features: {
    'group-hover': true,
    'focus-within': true,
    'dark-mode': true,
  },
  darkMode: false,
  variants: {
    extend: {},
  },
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [],
    },
  },
};
