const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildFolderName = "public";

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/js/index.js", "./src/css/index.css"],
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                loader: "file-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]",
                    outputPath: "/",
                    publicPath: "/"
                }
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, buildFolderName)
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new CopyPlugin({
            patterns:
                [
                    { from: "src/index.html" },
                    { from: "src/favicon.ico" }
                ]
        }),
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "Backbone": "backbone"
        })
    ],
    devServer: {
        index: path.resolve(__dirname, buildFolderName, "index.html"),
        contentBase: path.resolve(__dirname, buildFolderName),
        publicPath: "/",
        port: 8080,
        watchContentBase: false,
        open: true,
        inline: true,
        proxy: {
            "/api": {
                target: "http://localhost:80",
                pathRewrite: {"^/api" : ""}
            }
        }
    }
};