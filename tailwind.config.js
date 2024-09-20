/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#020617',
        },
        secondary:{
          100:'#FF6700',
          200:'#EBEBEB',
          300:'#C0C0C0',
          400:'#3A6EA5'



        
        }
      }
    },
  },
  plugins: [],
}

