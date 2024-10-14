const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');

const app = express();
const port = 8909;

// Set up Webpack compiler with the configuration
const compiler = webpack(webpackConfig);

// Use Webpack Dev Middleware to serve files from the Webpack compiler
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

// Use Webpack Hot Middleware for HMR
app.use(webpackHotMiddleware(compiler));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
