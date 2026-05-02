/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          50: "#F3F0FF",
          100: "#E8E4FF",
          200: "#D4CCFF",
          300: "#B8A9FF",
          400: "#9B85FF",
          500: "#8C7CF0",
          600: "#7B68EE",
          700: "#6B54DB",
          800: "#5B44B8",
          900: "#4B3892",
        },
        accent: {
          pink: "#FFB5D9",
          green: "#A8E6CF",
          yellow: "#FFE5A0",
          orange: "#FFD4A3",
          lavender: "#C6B9FF",
          sky: "#A8D8EA",
        },
        soft: {
          bg: "#FAFAFC",
          card: "#FFFFFF",
          text: "#4A4A5A",
          muted: "#8E8E9E",
        },
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(135deg, #8C7CF0 0%, #C6B9FF 50%, #FFB5D9 100%)',
        'soft-purple': 'linear-gradient(135deg, #8C7CF0 0%, #B8A9FF 100%)',
        'soft-pink': 'linear-gradient(135deg, #FFB5D9 0%, #FFD4A3 100%)',
        'soft-lavender': 'linear-gradient(135deg, #E8E4FF 0%, #F3F0FF 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(140, 124, 240, 0.08)',
        'soft-lg': '0 8px 30px rgba(140, 124, 240, 0.12)',
        'soft-xl': '0 12px 40px rgba(140, 124, 240, 0.15)',
        'card': '0 2px 12px rgba(140, 124, 240, 0.06)',
        'card-hover': '0 8px 24px rgba(140, 124, 240, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Noto Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
