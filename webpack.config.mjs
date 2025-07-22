import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  mode: "development",
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "chunks/[name].js",
  },
  stats: {
    children: true
  },
  resolve: {
    alias: {
      "@logo": path.resolve(__dirname, "style/logo/logo_images"),
      "@button": path.resolve(__dirname, "style/button/button_images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "style")],
                charset: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(svg)$/i,
        type: "asset/resource",
        generator: { filename: "[path][name][ext]" },
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "style/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({ extensions: ['js'], fix: true }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      template: "index.html", minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./style/unwrap/unwrap_images/unwrap.svg",
          to: "./style/unwrap/unwrap_images",
        },
        {
          from: "./style/brends/brends_images",
          to: "./style/brends/brends_images",
        },
        { from: "./style/logo/logo_images", to: "./style/logo/logo_images" },
        {
          from: "./style/table/table_images",
          to: "./style/table/table_images",
        },
        { from: "./style/images", to: "./style/images" },
        { from: ".editorconfig", to: "" },
      ],
    }),
  ],
};
