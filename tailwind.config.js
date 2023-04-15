/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        parlartheme: {
          primary: "#F63E7B",

          secondary: "#FFF8F5",

          accent: "#000000",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#C6FFE0",

          success: "#009444",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
