/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // JustTouch UI Design System Palette
        // #7ABEE8 sky-blue · #EDF5FF light tint · #E6E8EB surface · #C7CEDB muted · #223049 navy
        brand: {
          50:  '#EDF5FF',
          100: '#D6EAFB',
          200: '#B3D8F5',
          300: '#8ECBF0',
          400: '#7ABEE8',
          500: '#5AADD9',
          600: '#3D96C8',
          700: '#2B7DAD',
          800: '#1E6490',
          900: '#154D72',
          950: '#0D3352',
        },
        // Surface / neutral tokens derived from palette
        surface: {
          0:   '#FFFFFF',
          50:  '#EDF5FF',
          100: '#E6E8EB',
          200: '#C7CEDB',
          300: '#A8B2C4',
          400: '#8896AD',
          500: '#677A96',
          600: '#4E6080',
          700: '#384A66',
          800: '#2A3A54',
          900: '#223049',
          950: '#16203A',
        },
      },
      keyframes: {
        'fade-in':  { from: { opacity: '0', transform: 'translateY(4px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'slide-in': { from: { transform: 'translateX(-100%)' },             to: { transform: 'translateX(0)' } },
      },
      animation: {
        'fade-in':  'fade-in 0.15s ease-out',
        'slide-in': 'slide-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
