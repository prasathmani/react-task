module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
	colors: {
		primary: "#00796b",
		secondary: "#ef5350",
		"text-base": "white",
	},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
