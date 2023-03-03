/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", "sans-serif"],

        montserrat: ["montserrat", "sans-serif"],
      },
      keyframes: {
        slideinbottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },

          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        slideinleft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },

          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        /*popupanimation: {
          "0%": {
            transform: 'scale(1)',
          },
          "50%": {
            transform: 'scale(1.4)',
          },
          "60%": {
            transform: 'scale(1.1)',
          },
          "70%": {
            transform: 'scale(1.2)',
          },
          "80%": {
            transform: 'scale(1)',
          },
          "90%": {
            transform: 'scale(1.1)',
          },
          "100%": {
            transform: 'scale(1)',
          },
        },*/
        infinitescrollleft: {
          "0%": { left: "0%" },

          "100%": { left: "-100%" },
        },
        infinitescrollright: {
          "0%": { right: "0%" },

          "100%": { right: "-100%" },
        },

        scroll: {
          "0%": { left: "0" },
          "100%": { left: "-100%" },
        },
        wheel: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        //popup: "popupanimation 0.7s",
        carosel: "scroll 5s linear infinite",
        wheel: "wheel 70s linear infinite",

        slideinbottom: "slideinbottom 1s ease-in-out 0s 1",
        slideinleft: "slideinleft 1.5s ease-in-out 0s 1",
        infinitescrollleft: "infinitescrollleft 10s linear infinite",
        infinitescrollright: "infinitescrollright 10s linear infinite",
      },
      dropShadow: {
        bold: "black 5px 5px 1px",
        semibold: "black 3px 3px 1px",
        lightbold: "black 2.5px 2.5px 0.5px",
        lightestbold: "black 1px 1px 2px",
        lowGlowtext: "rgba(255, 255, 255, 0.6) 0px 0px 10px ",
        lowGlow: "rgba(255, 255, 255, 0.3) 0px 0px 20px ",
        glow: "rgba(255, 255, 255, 0.6) 0px 0px 30px",
      },
      boxShadow: {
        extrasoft: "0px 0px 6px 5px rgba(0, 0, 0, 0.2)",
        soft: "0px 0px 6px 5px rgba(0, 0, 0, 0.2)",
        lowGlow:
          "0px 0px 50px 5px rgba(255, 255, 255, 0.3), inset 0px 0px 50px 5px rgba(255, 255, 255, 0.2)",
        glow: "0px 0px 50px 5px rgba(255, 255, 255, 0.6), inset 0px 0px 50px 5px rgba(255, 255, 255, 0.5) ",
        glowbig:
          "0px -5px 60px 10px rgba(255, 255, 255, 0.6), inset 0px 0px 50px 10px rgba(255, 255, 255, 0.5) ",
      },
      backgroundImage: {
        "event-pattern": "url('/bgPatternindex.svg')",
        "index-pattern": "url('/bgPatternindex.svg')",
        legacy:
          "url('https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/legacybg.svg')",

        LandingEvent: "url('/Landing/ebgobj.svg')",
        "carosel-pattern":
          "url('https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/caroselSlide.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      backgroundSize: {
        pattern: "100px",
      },
      swiperSlideActive: {
        width: "400px",
        height: "400px",
      },
      colors: {
        "Safety-Orange": {
          100: "#FFBF1A",
          500: "#FF7E0A",
        },
        saffron: {
          25: "#F5F4F4",
          50: "#fffceb",
          100: "#fdf4c8",
          200: "#fbe98c",
          300: "#f9d750",
          400: "#f7c427",
          500: "#f1a50f",
          600: "#d57e0a",
          700: "#b1590c",
          800: "#904510",
          900: "#763911",
        },
        "flame-pea": {
          50: "#fcf5f0",
          100: "#f9e7db",
          200: "#f1ccb7",
          300: "#e9aa88",
          400: "#df7f58",
          500: "#d75e37",
          600: "#c9482d",
          700: "#a73727",
          800: "#862e26",
          900: "#6c2922",
        },
        razzmatazz: {
          50: "#fff0f3",
          100: "#ffe3e8",
          200: "#ffcbd6",
          300: "#ffa0b6",
          400: "#ff6b91",
          500: "#fc376e",
          600: "#ea145a",
          700: "#d60b52",
          800: "#a50c46",
          900: "#8d0e42",
        },
        monza: {
          50: "#ffeff2",
          100: "#ffdce4",
          200: "#ffbfcd",
          300: "#ff92a9",
          400: "#ff5479",
          500: "#ff1f4f",
          600: "#ff0037",
          700: "#db002f",
          800: "#ba0028",
          900: "#940826",
        },
        cerulean: {
          50: "#f1fafe",
          100: "#e1f4fd",
          200: "#bce9fb",
          300: "#81d8f8",
          400: "#3ec6f2",
          500: "#15aee2",
          600: "#0993c9",
          700: "#08709c",
          800: "#0b5f81",
          900: "#0f4e6b",
        },
        "prussian-blue": {
          50: "#e5faff",
          100: "#d0f6ff",
          200: "#aaedff",
          300: "#77ddff",
          400: "#42bbff",
          500: "#1896ff",
          600: "#0080ff",
          700: "#0083ff",
          800: "#0073e0",
          900: "#012a56",
          950: "#231942",
          1000: "#02012B",
        },
      },
    },
  },
  plugins: [],
};
