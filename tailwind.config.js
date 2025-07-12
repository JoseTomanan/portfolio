/** @type {import('tailwindcss').Config} */

export default {
	darkMode: ["class"],
	safelist: ["dark"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			'heading': ["IBM Plex Sans", "sans-serif"],
			'sans': ["Inter", "sans-serif"],
			'mono': ["JetBrains Mono", "monospace"],
		},
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {
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
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
}

