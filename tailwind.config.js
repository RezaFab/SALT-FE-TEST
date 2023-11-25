/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f4f4f4",
        thistle: "#afa2c3",
        darkslategray: {
          "100": "#3e334f",
          "200": "rgba(62, 51, 79, 0.6)",
        },
        "iris-80": "#7879f1",
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.4)",
          "200": "rgba(255, 255, 255, 0)",
        },
        darkslateblue: "#463460",
        silver: "#b4b4bb",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "13xl": "32px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },

};
