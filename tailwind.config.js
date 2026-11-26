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
        // Neutrals — dominant surfaces
        neutral: {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
        // Plum — brand accent only
        plum: {
          50:  '#FAF0F6',
          100: '#F2D9E8',
          200: '#E4B3D1',
          300: '#D08DB9',
          400: '#B8649E',
          500: '#8B2E63',
          600: '#6A1B4D',   // primary brand
          700: '#561535',
          800: '#3A0D2C',   // deep plum
          900: '#280820',
          950: '#160412',
        },
        // Gold — CTA accent only
        gold: {
          50:  '#FBF6E9',
          100: '#F5EAC8',
          200: '#EDD494',
          300: '#DFC060',
          400: '#C6A24B',   // primary gold
          500: '#A8882E',
          600: '#8A6E1A',
          700: '#6C5410',
          800: '#4E3C08',
          900: '#302404',
          950: '#181202',
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
