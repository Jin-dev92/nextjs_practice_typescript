/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  // tailwind를 사용할 경로들을 입력
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

