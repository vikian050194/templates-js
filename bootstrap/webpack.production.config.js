const merge = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimizer: [new TerserPlugin({
            sourceMap: true
        })]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "production",
            DEBUG: false
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
});