/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0F14',
          secondary: '#121821',
          card: '#121821',
          cardHover: '#17202C',
        },
        text: {
          primary: '#E6EDF3',
          muted: '#8B96A5',
        },
        signal: {
          green: '#3ECF8E',
          amber: '#F5A623',
          red: '#F85149',
          blue: '#58A6FF',
        },
        connector: {
          idle: '#2A3441',
          active: '#3ECF8E',
        }
      },
      fontFamily: {
        heading: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(62, 207, 142, 0.35)',
        'glow-blue': '0 0 25px -5px rgba(88, 166, 255, 0.35)',
        'glow-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
