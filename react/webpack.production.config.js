/* eslint-disable no-unused-vars */
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

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
        new HtmlWebpackPlugin({
            "title": "React Web App",
            "favicon": "favicon.png"
        }),
        new HtmlWebpackRootPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
});