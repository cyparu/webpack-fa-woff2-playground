module.exports = ({file, options, env}) => ({
  plugins: {
    // Remove old font formats aside of "woff2"
    "postcss-discard-font-face": ["woff2"]
  }
})