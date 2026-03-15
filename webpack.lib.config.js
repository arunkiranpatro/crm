const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const sharedRules = [
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
];

const sharedOptimization = {
  minimizer: [`...`, new CssMinimizerPlugin()]
};

const sharedResolve = { extensions: [".js", ".jsx"] };

module.exports = [
  // CommonJS build — for require() / Next.js server-side rendering
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
    module: { rules: sharedRules },
    optimization: sharedOptimization,
    resolve: sharedResolve,
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })]
  },
  // ES Module build — for import / tree-shaking in Next.js
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
    module: { rules: sharedRules },
    optimization: sharedOptimization,
    resolve: sharedResolve,
    // CSS already emitted by CJS build; suppress duplicate from ESM build
    plugins: [new MiniCssExtractPlugin({ filename: "styles.esm.css" })]
  }
];
