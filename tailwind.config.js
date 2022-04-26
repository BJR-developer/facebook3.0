module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'msm':{"max":"410px"},
      'sm': {'max':'624px'},      // => @media (min-width: 640px) { ... }

      'md': {'max':'768px'},      // => @media (min-width: 768px) { ... }
      
      'mdd': {'max':'855px'},      // => @media (min-width: 768px) { ... }

      'lg': {'max':'1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'max':'1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'max':'1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}