/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    fontFamily: {
      'heading': ["IBM Plex Sans", "sans-serif"],
      'sans': ["Inter", "sans-serif"],
      'mono': ["JetBrains Mono", "monospace"],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // lucy: {
        //   bg: '#100f13',
        //   surface: '#1e1d23',
        //   fg: '#ded7d0',
        //   primary: '#f0ce59',
        //   secondary: '#ffac5c',
        //   muted: '#A49EAC',
        //   border: '#686069',
        //   hover: '#2f2c32',
        // }
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

