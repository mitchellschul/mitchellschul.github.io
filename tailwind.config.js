module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      bold: "700",
    },
    colors: {
      black: "#000000",
      "accent-blue": "#0021F3",
      "light-gray": "#D1D1D1",
      gray: "#737373",
      white: "#eee",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
