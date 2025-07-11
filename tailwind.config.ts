/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          colorParagraph: '#8435de',
          colorBackground: '#8435de'
        },
      },
    },
    plugins: [],
}
