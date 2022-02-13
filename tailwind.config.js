module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '960px',
      'xl': '1024px',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
