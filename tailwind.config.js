/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    fontFamily: {
      'heading': ["IBM Plex Sans", "sans-serif"],
      'sans': ["Inter", "sans-serif"],
      'mono': ["Fira Mono", "monospace"],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        lucy: {
          bg: '#100f13',
          surface: {
            DEFAULT: '#1e1d23',
            alt: '#2f2c32',
          },
          fg: '#ded7d0',
          primary: '#f0ce59',
          secondary: '#ff7da3',
          tertiary: '#56c6d5',
          muted: '#a49eac',
          border: {
            DEFAULT: '#2f2c32',
            alt: '#524b51',
          },
          hover: '#686069',
        },
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
}

