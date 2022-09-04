/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    container: false,
    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
      sans: ["IBM Plex Sans", "sans-serif"],
    },
    fontSize: {
      base: "1rem",
      badge: ".875rem",
      h6: "1.313rem",
      h5: "1.563rem",
      h4: "2.188rem",
      h3: "3.063rem",
      h2: "3.875rem",
      h1: "6.188rem",
    },
    lineHeight: {
      base: "1.3rem",
      badge: "1.313rem",
      h6: "1.706rem",
      h5: "2.031rem",
      h4: "2.791rem",
      h3: "3.908rem",
      h2: "5.038rem",
      h1: "1em",
    },
    letterSpacing: {
      h1: "-1.5px",
      h6: "0.15px",
      base: "0.5px",
    },
    colors: {
      primary: "#7f5af0",
      secondary: "#2cb67d",
      black: "#16161a",
      darkGrey: "#5d6a7b",
      mediumGrey: "#94a1b2",
      white: "#fffffe",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "991px",
      xl: "1170px",
    },
    extend: {},
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    }),
  ],
};
