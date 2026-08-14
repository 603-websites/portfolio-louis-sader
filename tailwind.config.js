/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7fb',
          100: '#e6edf5',
          200: '#c9d9ea',
          300: '#a3bfd9',
          400: '#7aa5cc',
          500: '#4d7fad',
          600: '#38648f',
          700: '#2b4f74',
          800: '#1d3d5f',
          900: '#0d2c4d',
          950: '#002244',
        },
        silver: {
          light: '#d6dadd',
          DEFAULT: '#b0b7bc',
          dark: '#8a9299',
        },
        dark: {
          50: '#f5f8fa',
          100: '#e9eef3',
          200: '#d4dde6',
          300: '#b3c1d1',
          400: '#8399b0',
          500: '#547293',
          600: '#2f5580',
          700: '#1b4370',
          800: '#002244',
          900: '#001731',
          950: '#000d1f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#7aa5cc' },
        },
      },
    },
  },
  plugins: [],
}
