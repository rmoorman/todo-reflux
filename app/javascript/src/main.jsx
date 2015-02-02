'use strict';
var React = require('react');

var Header = require('./header.js');
var App = require('./app.jsx');

document.addEventListener('DOMContentLoaded', function () {
    
    new Header();

    React.render(<App />, document.body);
});
