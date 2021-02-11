module.exports = () => ({
  mode: 'development',

  target: ['web', 'es5'],

  devtool: 'source-map',

  entry: './src/index.ts',

  output: {
    filename: 'index.js',
    path: __dirname + '/lib',
    publicPath: 'http://localhost:8000/assets',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            // options: {
            //   configFile: path.join(process.cwd(), './tsconfig.json'),
            // },
          },
        ],
      },
    ],
  },
});
