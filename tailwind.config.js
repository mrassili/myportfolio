module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: [
          "Noe Display",
          "Times New Roman",
          "Georgia",
          "Times",
          "serif",
        ],
        lato: [
          "Lato",
          "Segoe UI",
          "Candara",
          "Bitstream Vera Sans",
          "DejaVu Sans",
          "Bitstream Vera Sans",
          "Trebuchet MS",
          "Verdana",
          "Verdana Ref",
          "sans-serif",
        ],
      },
      margin: {
        "28": "7rem",
      },
      padding: {
        "28": "7rem",
      },
      fontSize: {
        "7xl": "5rem",
      },
      flex: {
        "2": "2",
      },
      colors: {
        lime: "#2ED573",
        navy: "#130F40",
        navier: "#0e0b2d",
        "black-light": "rgba(0,0,0,.11)",
        "light-gray": "#c4c4c4b0",
        "bold-gray": "#c4c4c4"
      },
      height: {
        "90-screen": "90vh",
        "95-screen": "95vh",
        "half-full": "50%",
        "14": "3.5rem",
      },
      width: {
        "70-screen": "70vw",
        "60-screen": "60vw",
        "65-screen": "65vw",
        pt375rem: ".375rem",
      },
      inset: {
        "2rem": "2rem",
      },
      boxShadow: {
        multi2xl:
          "0 25px 50px -12px rgba(0, 0, 0, .25), 0 -25px 50px -12px rgba(0, 0, 0, .25)",
      },
    },
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        ".outline-modal": { outline: "9999px solid rgba(0,0,0,0.59)" },
      })
    },
  ],
}
