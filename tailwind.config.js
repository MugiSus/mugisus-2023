/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#000000',
        'purple': '#B9ACDE',
        'green': '#BBE289',
        'l-purple': '#DCD5EF', // light
        'l-green': '#DDF1C4',
        'xl-purple': '#F0EDF8', // extra light
        'xl-green': '#F3FAEA',
        'gray': '#808080',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      borderWidth: {
        '6': '6px',
      },
      outlineWidth: {
        '6': '6px',
      },
      outlineOffset: {
        '3': '3px',
      },
    }
  },
  plugins: [],
}
