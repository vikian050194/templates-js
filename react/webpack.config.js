const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./js/index.jsx"],
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
                resolve: {
                    extensions: [".js", ".jsx"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            "title": "React Web App",
            "favicon": "favicon.png"
        }),
        new HtmlWebpackRootPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    devServer: {
        index: path.resolve(__dirname, "build", "index.html"),
        contentBase: path.resolve(__dirname, "build"),
        publicPath: "/",
        port: 8080,
        watchContentBase: false,
        open: true,
        inline: true
    }
};