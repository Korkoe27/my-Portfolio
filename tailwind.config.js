/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
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

