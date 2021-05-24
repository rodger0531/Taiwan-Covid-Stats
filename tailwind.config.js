module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        60: "15rem",
        72: "18rem",
        96: "24rem",
      },
      minHeight: {
        40: "10rem",
        60: "15rem",
        72: "18rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
