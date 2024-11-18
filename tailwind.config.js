/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{html,js}", // Matches all HTML and JS files in the `src` directory and subdirectories
    "./index.html",          // Includes `index.html` in the root directory
    "./src/script.js" ],
  theme: {
    extend: {
      cursor: {
        default: 'url(/assets/imgs/mouse-pointer.png), pointer',
        pointer: 'url(/assets/imgs/mouse-pointer.png), pointer',
      },
    },
  },
  plugins: [],
}

