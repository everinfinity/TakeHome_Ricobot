/** @type {import('tailwindcss').Config} */
const borderThumbnailPlugin = require("./src/tailwindPlugins/borderThumbnail");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      main: ["Raleway"],
    },
  },
  plugins: [borderThumbnailPlugin],
};
