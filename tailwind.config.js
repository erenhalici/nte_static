/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      colors: {
        red: {
          600: "#DD2320",
        },
        sky: {
          600: "#0971af",
        },
        neutral: {
          600: "#606060",
        },
      },
      backgroundImage: {
        red: "url('../img/34-red bg.png')",
        sky: "url('../img/35-sky bg.png')",
        shadow: "url('../img/0-ust background.png')",
        banner: "url('../img/5-Banner.png')",
        magnetic: "url('../img/6-Giris.png')",
        chemical: "url('../img/7-ara bant.png')",
        line: "url('../img/8-cizgi.png')",
        "blue-arrow": "url('../img/20-NTE tanıtım projesi.png')",
        "red-arrow": "url('../img/21-NTE tanıtım video.png')",
        windmills: "url('../img/22-iletisim background.png')",
      },
      fontSize: {
        xs: "0.4rem",
      },
      lineHeight: {
        snug: "1.3",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Filson Pro Book"],
      black: ["Filson Pro Black"],
      regular: ["Filson Pro Regular"],
      italic: ["Filson Pro Book Italic"],
      heavy: ["Filson Pro Heavy"],
      montserrat: ["Montserrat Regular"],
      "montserrat-bold": ["Montserrat Bold"],
      "montserrat-extrabold": ["Montserrat ExtraBold"],
      awesome: ["FontAwesome"],
    },
  },
  plugins: [],
};
