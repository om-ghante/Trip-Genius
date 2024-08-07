const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '200': '800px',
        '100': '350px'
      },
      height: {
        '200': '200px',
        '800': '800px'
      },
      inset: {
        '1/2.8': '20%', 
      }
    },
    
  },
  plugins: [],
});