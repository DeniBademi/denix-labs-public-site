module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    './node_modules/flyonui/dist/js/*.js',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-motion'),
    require('flyonui'),
    require('flyonui/plugin')
  ]
}
