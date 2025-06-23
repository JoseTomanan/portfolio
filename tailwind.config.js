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
        bg: colors.slate,
        primary: colors.sky,
        secondary: colors.amber,
        // lucy: {
        //   bg: '#1E1D24',
        //   surface: '#28252C',
        //   primary: '#F29CA3',
        //   secondary: '#F4C16D',
        //   text: '#E5E5E5',
        //   muted: '#A49EAC',
        //   border: '#3A3740',
        //   hover: '#FFBFD0',
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

