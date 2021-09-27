module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["poppins", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
    extend: {
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",
      },
      colors: {
        ink: "hsl(210, 50%, 13%)",
        pencil: "hsl(210, 50%, 25%)",
        light: "hsl(0, 0%, 94%)",
        moonlight: "hsl(0, 0%, 78%)",
        night: {
          light: "hsl(210, 35%, 11%)",
          DEFAULT: "hsl(210, 35%, 9%)",
          dark: "hsl(210, 35%, 7%)",
        },
        paper: {
          light: "hsl(42, 87%, 99%)",
          DEFAULT: "hsl(42, 87%, 97%)",
          dark: "hsl(42, 87%, 95%)",
        },
      },
      zIndex: {
        "-10": "-10",
      },
      transitionProperty: {
        filter: "filter",
        bg: "background-color",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        risein: {
          "0%": {
            opacity: 0,
            transform: "rotate(90deg) scale(0.5) translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "fadein-1000-0": "fadein 1000ms 0ms ease-in-out 1 both",
        "fadein-1000-50": "fadein 1000ms 50ms ease-in-out 1 both",
        "fadein-1000-100": "fadein 1000ms 100ms ease-in-out 1 both",
        "fadein-1000-150": "fadein 1000ms 150ms ease-in-out 1 both",
        "fadein-1000-200": "fadein 1000ms 200ms ease-in-out 1 both",
        "fadein-1000-250": "fadein 1000ms 250ms ease-in-out 1 both",
        "fadein-1000-300": "fadein 1000ms 300ms ease-in-out 1 both",
        "fadein-1000-350": "fadein 1000ms 350ms ease-in-out 1 both",
        "fadein-1000-400": "fadein 1000ms 400ms ease-in-out 1 both",
        "fadein-1000-450": "fadein 1000ms 450ms ease-in-out 1 both",
        "fadein-1000-500": "fadein 1000ms 500ms ease-in-out 1 both",
        "fadein-1000-550": "fadein 1000ms 550ms ease-in-out 1 both",
        "fadein-1000-600": "fadein 1000ms 600ms ease-in-out 1 both",
        "fadein-1000-650": "fadein 1000ms 650ms ease-in-out 1 both",
        "fadein-1000-700": "fadein 1000ms 700ms ease-in-out 1 both",
        "fadein-1000-750": "fadein 1000ms 750ms ease-in-out 1 both",
        "fadein-1000-800": "fadein 1000ms 800ms ease-in-out 1 both",
        "fadein-1000-850": "fadein 1000ms 850ms ease-in-out 1 both",
        "fadein-1000-900": "fadein 1000ms 900ms ease-in-out 1 both",
        "fadein-1000-950": "fadein 1000ms 950ms ease-in-out 1 both",
        "fadein-1000-1000": "fadein 1000ms 1000ms ease-in-out 1 both",
        "fadein-2000-1500": "fadein 2000ms 1500ms ease-in-out 1 both",
        "risein-300-100": "risein 300ms 100ms ease-in-out 1 both",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontWeight: 400,
            fontFamily: theme("fontFamily.sans").join(", "),
            color: theme("colors.ink"),
            a: {
              fontWeight: 400,
              color: theme("colors.blue.600"),
              "&:hover": { color: theme("colors.blue.700") },
              textDecoration: "none",
            },
            "h1, h2, h3, h4, h5, h6, blockquote": {
              color: theme("colors.ink"),
              strong: {
                color: theme("colors.ink"),
              },
            },
            "h6, h5, h4": {
              fontWeight: 400,
            },
            "h3, h2, h1": {
              fontWeight: 600,
              a: {
                fontWeight: 600,
              },
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.ink") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.ink") },
              },
            },
            code: {
              fontFamily: theme("fontFamily.mono").join(", "),
              color: theme("colors.purple.600"),
            },
            pre: {
              fontFamily: theme("fontFamily.mono").join(", "),
              color: theme("colors.moonlight"),
              code: {
                color: theme("colors.moonlight"),
              },
              backgroundColor: theme("colors.night.light"),
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            },
            blockquote: {
              color: theme("colors.ink"),
              borderColor: theme("colors.ink"),
            },
            hr: {
              borderColor: theme("colors.moonlight"),
            },
            th: {
              verticalAlign: "top",
            },
            "thead, tbody, tr": {
              borderWidth: "0 !important",
            },
            "th, td": {
              color: theme("colors.ink"),
              borderWidth: "1px",
              borderColor: theme("colors.moonlight"),
              padding: ".5rem 1rem !important",
            },
          },
        },
        dark: {
          css: {
            fontFamily: theme("fontFamily.sans").join(", "),
            color: theme("colors.light"),
            a: {
              color: theme("colors.yellow.400"),
              "&:hover": { color: theme("colors.yellow.300") },
            },
            "h1, h2, h3, h4, h5, h6, blockquote": {
              color: theme("colors.light"),
              strong: {
                color: theme("colors.light"),
              },
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.light") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.light") },
              },
            },
            code: {
              color: theme("colors.pink.500"),
            },
            blockquote: {
              color: theme("colors.light"),
              borderColor: theme("colors.light"),
            },
            hr: {
              borderColor: theme("colors.pencil"),
            },
            th: {
              verticalAlign: "top",
            },
            "thead, tbody, tr": {
              borderWidth: "0 !important",
            },
            "th, td": {
              color: theme("colors.light"),
              borderWidth: "1px",
              borderColor: theme("colors.pencil"),
              padding: ".5rem 1rem !important",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
