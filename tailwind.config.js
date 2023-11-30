/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      gridAutoRows: {
        "200px": "minmax(0, 300px)",
      },
    },
  },
  plugins: [],
};
