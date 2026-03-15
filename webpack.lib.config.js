const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const sharedOptimization = {
  minimizer: [
    new TerserPlugin({
      // Inline licenses as comments instead of emitting separate .LICENSE.txt files.
      // This prevents Turbopack / bundlers from trying to process .txt files.
      terserOptions: { format: { comments: false } },
      extractComments: false
    }),
    new CssMinimizerPlugin()
  ]
};

const sharedResolve = { extensions: [".js", ".jsx"] };

module.exports = [
  // CommonJS build — for require() / Next.js server-side rendering
  // Also extracts all CSS to dist/styles.css for consumers to import
  {
    name: "cjs",
    entry: "./src/lib/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.cjs.js",
      library: { type: "commonjs2" },
      globalObject: "this"
    },
    mode: "production",
    externals: {
      react: { commonjs: "react", commonjs2: "react", amd: "react", root: "React" },
      "react-dom": { commonjs: "react-dom", commonjs2: "react-dom", amd: "react-dom", root: "ReactDOM" }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    optimization: sharedOptimization,
    resolve: sharedResolve,
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })]
  },
  // ES Module build — for import / tree-shaking in Next.js
  // CSS is handled by the CJS build; consumers import dist/styles.css once
  {
    name: "esm",
    entry: "./src/lib/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.esm.js",
      library: { type: "module" },
      globalObject: "this"
    },
    mode: "production",
    externalsType: "module",
    externals: {
      react: "react",
      "react-dom": "react-dom"
    },
    experiments: { outputModule: true },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" }
        },
        // CSS is extracted by the CJS build; skip emission here
        {
          test: /\.s[ac]ss$/i,
          use: ["css-loader", "sass-loader"]
        },
        {
          test: /\.css$/i,
          use: ["css-loader"]
        }
      ]
    },
    optimization: sharedOptimization,
    resolve: sharedResolve
  }
];
