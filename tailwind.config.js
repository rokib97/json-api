/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e599e",

          secondary: "#aebeef",

          accent: "#096d02",

          neutral: "#23253E",

          "base-100": "#E8ECF3",

          info: "#92A0DD",

          success: "#17826B",

          warning: "#985D0B",

          error: "#EC4678",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
