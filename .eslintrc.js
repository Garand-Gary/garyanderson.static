module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"],
  rules:{
    "linebreak-style": 0
  },
  env: {
    "browser": true,
    "node": true
  }
}
