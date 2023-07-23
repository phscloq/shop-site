/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'paynes-gray': '#586f7c',
        'g-red': '#c44900',
      },
      minHeight:{
        '80': '780px',
      },
      flexGrow:{
        3: '3',
      },
      flex:{
        '2': '2 1 0%',
        '6': '6 1 0%',
      },
      boxShadow:{
        'newco': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      },
    },
  },
  plugins: [],
}
