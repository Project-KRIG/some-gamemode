const webpack = require('webpack');
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

const server = {
  entry: './server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'server')],
      },
      watch: {
        include: [path.resolve(buildPath, 'server')],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[contenthash].server.js',
    path: path.resolve(buildPath, 'server'),
  },
  target: 'node',
};

const client = {
  entry: './client.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'client')],
      },
      watch: {
        include: [path.resolve(buildPath, 'client')],
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[contenthash].client.js',
    path: path.resolve(buildPath, 'client'),
  },
};

module.exports = [server, client];
