const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildFolderName = "public";

const files = ["./index.html", "./favicon.svg", "./css/bootstrap-theme.css", "./css/index.css", "./js/index.js"];

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "bootstrap-loader/extractStyles", ...files],
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
                },
                resolve: {
                    extensions: [".js"]
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
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: "file-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]",
                    outputPath: "fonts",
                    publicPath: "fonts"
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.(html)$/,
                loader: "file-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]"
                }
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, buildFolderName),
        publicPath: "/"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    devServer: {
        index: path.resolve(__dirname, buildFolderName, "index.html"),
        contentBase: path.resolve(__dirname, buildFolderName),
        publicPath: "/",
        port: 8080,
        watchContentBase: false,
        open: true,
        inline: true
    }
};