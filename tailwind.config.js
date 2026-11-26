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
        // JustTouch UI — Earthy Olive & Amber Palette
        // #506C38 olive · #283618 forest · #FEFAE0 cream · #DDA15E amber · #BC6C25 burnt-orange
        brand: {
          50:  '#F7F9F3',
          100: '#EAF0E0',
          200: '#CFDDB8',
          300: '#A8C285',
          400: '#7DA355',
          500: '#506C38',   // primary olive
          600: '#3D5429',
          700: '#283618',   // forest dark
          800: '#1C2710',
          900: '#111808',
          950: '#090D04',
        },
        amber: {
          50:  '#FDF6EC',
          100: '#FAEBD4',
          200: '#F4D4A8',
          300: '#EBB87A',
          400: '#DDA15E',   // primary amber accent
          500: '#D08840',
          600: '#BC6C25',   // burnt orange
          700: '#9A5418',
          800: '#7A3F10',
          900: '#5A2D08',
          950: '#3C1C04',
        },
        cream: {
          50:  '#FFFEF7',
          100: '#FEFAE0',   // page background
          200: '#F5F0CC',
          300: '#E8E0A8',
          400: '#D4C87A',
          500: '#C0B050',
          600: '#A09040',
          700: '#7A6C2C',
          800: '#5A4E1C',
          900: '#3C3410',
          950: '#1C1808',
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
