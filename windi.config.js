export default {
  scan: {
    dirs: ["./"],
    exclude: ["node_modules", ".git", "dist", ".cache", ".temp"],
  },
  preflight: {
    alias: {
      // add gridsome aliases
      "g-link": "a",
      "g-image": "img",
    },
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          lg: "4.375rem",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xxs: ".625rem",
      },
      transitionProperty: {
        width: "width",
      },
      height: {
        bigCard: "720px",
        144: "34em",
      },
      width: {
        editorSubMenu: "508px",
        moduleCard: "416px",
        sidebar: "425px",
      },
      colors: {
        fog: "#F3F5F9",
        ultraLightGray: "#FBFBFD",
        teal: {
          light: "#EDF9FA",
          DEFAULT: "#4CC4CC",
          dark: "#154549",
        },
        slateTransparent: {
          3: "#F1F1F3",
        },
      },
      screens: {
        "3xl": "1800px",
      },
      backgroundImage: {
        "image-fog": "url('~@/assets/img/bg-img.png')",
      },
    },
  },
  plugins: [],
};
