const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: isProduction ? "[name].[contenthash].js" : "[name].js",
    chunkFilename: isProduction ? "[name].[contenthash].js" : "[name].js",
  },
  devServer: {
    open: true,
    historyApiFallback: true, // Enable HTML5 History API fallback
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[name].[contenthash].css",
      })
    );
  } else {
    config.mode = "development";
  }
  return config;
};
