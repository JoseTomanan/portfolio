/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    fontFamily: {
      'heading': ["Nunito Sans"],
      'sans': ["Open Sans", "sans-serif"],
      'mono': ["JetBrains Mono"],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
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

