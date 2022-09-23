const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

let mode = "development",
    source_map = "source-map"

if (process.env.NODE_ENV === "production") {
    mode = "production"
    source_map = "nosources-source-map"
}

module.exports = {
    mode: mode,
    /**
     * entries for raw js files (source)
     */
    entry: {
        block: path.resolve(__dirname, 'src/block.js'),
        controller: path.resolve(__dirname, 'src/controller.js'),
    },
    /**
     * output folder,
     * where [name] === entry[name]/entry[i] from above
     */
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },

    /**
     * devtools controls if and how source maps are generated.
     */
    devtool: source_map,

    /**
     * https://webpack.js.org/configuration/plugins/
     */
    plugins: [
        new MiniCSSExtractPlugin()
    ],

    /**
     * https://webpack.js.org/configuration/module/#rule
     */
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/i,
                use:[
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset"
            },
        ]
    },
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.squooshMinify,
                    options: {
                        // Your options for `squoosh`
                    },
                },
            }),
        ],
    },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
