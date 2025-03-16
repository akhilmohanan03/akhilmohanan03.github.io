const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      xs: "420px",
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        "3xl": "1540px",
      },
      colors: {
        'd-black': '#0B0B0B',
        'd-gray' : "#FCFDFD",
        'd-green': "#15AF82" ,
        'border-color' : "#303030"
      },
      fontSize: {
        '7.5xl' : "82px",
        '4.5xl' : "42px",
        '2.5xl' : "32px"
      },
      padding:{
        "14.5":"60px",
         "12.5":"48px"
      },
      boxShadow:{
        'card-shadow' : '0 25px 32px rgb(198,202,212,25%)'
      },
      maxWidth: {
        '8xl': '1440px',
      },
      height:{
        '600' : '600px'
      }
    },
  },
 
}
