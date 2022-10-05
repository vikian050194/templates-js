const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildFolderName = "build";

module.exports = {
    mode: "development",
    entry: {
        bundle: ["./src/main.js", "./src/global.css", "./src/index.html", "./src/favicon.svg"]
    },
    devtool: "inline-source-map",
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte")
        },
        extensions: [".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"]
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].[id].js",
        path: path.resolve(__dirname, buildFolderName),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        hotReload: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    /**
					 * MiniCssExtractPlugin doesn"t support HMR.
					 * For developing, use "style-loader" instead.
					 * */
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new ESLintPlugin({})
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
