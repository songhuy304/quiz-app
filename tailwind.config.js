/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        Bgprimary: '#f4eae1',  
        Bgsecondary: '#64748B', 
        Bgaccent: '#F59E0B',   
        custom : {
          gray: {
            1: '#9A9A9A',
            2: "#535A65",
            3: "#c3c3c3",
            4: "#ebebeb"
          },
          black: {
            1: '#121212'
          },
          green: {
            1: "#0C513F"
          }
        }
      },
    },
  },
  plugins: [],
}

