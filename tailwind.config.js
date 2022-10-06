// /** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', defaultTheme.fontFamily.sans],
        'serif': ['ui-serif', 'Georgia', defaultTheme.fontFamily.sans],
        'mono': ['ui-monospace', 'SFMono-Regular', defaultTheme.fontFamily.sans],
        'display': ['Oswald', defaultTheme.fontFamily.sans],
        'body': ['"Open Sans"', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
