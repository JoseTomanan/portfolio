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
          bg: '#100F13',
          surface: {
            DEFAULT: '#1E1D23',
            alt: '#2F2C32',
          },
          fg: '#DED7D0',
          primary: '#F0CE59',
          secondary: '#FF7DA3',
          tertiary: '#56C6D5',
          muted: '#A49EAC',
          border: {
            DEFAULT: '#2F2C32',
            alt: '#524B51',
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

