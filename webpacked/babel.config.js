module.exports = {
    presets: [
      ["@babel/preset-env", {debug: true, useBuiltIns: "usage", corejs: 3}],
      ["@babel/preset-react", { runtime: "automatic" }],
    ]
}
