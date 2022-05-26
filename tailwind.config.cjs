module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  important: '#app',
  theme: {
    extend: {},
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};