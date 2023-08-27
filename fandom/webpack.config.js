const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildFolderName = "build";

module.exports = {
    mode: "development",
    entry: ["./src/js/index.js", "./src/css/index.css"],
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
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
    resolve: {
        alias: {
            actions: path.resolve(__dirname, "src/js/actions"),
            api: path.resolve(__dirname, "src/js/api"),
            componente: path.resolve(__dirname, "src/js/componente"),
            middlewares: path.resolve(__dirname, "src/js/middlewares"),
            models: path.resolve(__dirname, "src/js/models"),
            reducers: path.resolve(__dirname, "src/js/reducers"),
            store: path.resolve(__dirname, "src/js/store"),
            utils: path.resolve(__dirname, "src/js/utils")
        }
    },
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, buildFolderName),
        publicPath: "/"
    },
    plugins: [
        new ESLintWebpackPlugin({}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                "src/favicon.svg"
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Pure Web App",
            favicon: "src/favicon.svg",
            meta: {
                viewport: "width=device-width, initial-scale=1.0, minimal-ui, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes"
            }
        })
    ],
    devServer: {
        host: "127.0.0.1",
        port: 8000,
        hot: false,
        open: false,
        historyApiFallback: true,
        watchFiles: ["src/**/*"],
        static: {
            directory: path.join(__dirname, buildFolderName),
            publicPath: "/",
            watch: false
        },
        client: {
            overlay: {
                errors: true,
                warnings: false
            },
            progress: true,
            reconnect: true
        },
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                pathRewrite: { "^/api": "" }
            }
        }
    }
};
