module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: { port: 5095, proxy: "https://localhost:5094/api" }
}