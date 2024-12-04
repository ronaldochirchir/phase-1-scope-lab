const chai = require('chai');
const sinon = require('sinon');
global.expect = chai.expect;
const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');
const babel = require('@babel/core');  // Recommended to use @babel/core

// Read the HTML and JavaScript files
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
const src = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');
console.log(src);  // Logs the content of the JavaScript file

// Set up jsdom with the HTML and JavaScript
jsdom({
  html,  // Inject the HTML content
  src,   // Inject the JS content
});
