// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },    
      colors: {
        'main-color': '#4E4934',
        'text-color': '#f9f9f2',
      },
    },
  },
  plugins: [],
}
