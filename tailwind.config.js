/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#b2b6ff",
      
"secondary": "#501df7",
      
"accent": "#d87354",
      
"neutral": "#3C2442",
      
"base-100": "#F9F8FC",
      
"info": "#719DF4",
      
"success": "#20A293",
      
"warning": "#EAB21A",
      
"error": "#F86454",
      },
    },
  ],
  plugins: [require("daisyui")],
}
