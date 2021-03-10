module.exports = {
  plugins: {
    tailwindcss: {
      purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
      darkMode: 'media',
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {}
  }
}