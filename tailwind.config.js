/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': "#0D335D",
        'navy': "#1A508B",
        'beige': "#FFF3E6",
        'lavendar': "#C1A1D3"
      },
    },
    
    fontFamily: {
      display: ["oswald"],
      'saira': ["Saira Stencil One"],
    },

    fontFamily: {
      'salsa': ['Salsa', 'sans-serif']
    },
    
  },
  plugins: [],
}