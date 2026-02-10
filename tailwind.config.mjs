/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        petrol: '#1A3B4C',
        mint: '#35B8A6',
        apricot: '#FF9E6B',
        'warm-gray': '#F7F7F5',
        dark: '#102027',
        error: '#D32F2F',
        warning: '#F57C00',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        luciole: ['Luciole', 'sans-serif'],
      },
      borderRadius: {
        btn: '10px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};
