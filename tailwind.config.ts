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
          colorBackground: '#8435de',
          colorOptionBackground: '#3c0e70',
          colorHoverOptionBackground: '#2e085a',
          colorAnswerCorrect: '#0bfc03',
          colorAnswerWrong: '#f30f0f'
        },
      },
    },
    plugins: [],
}
