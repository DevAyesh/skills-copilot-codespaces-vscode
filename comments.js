// Create web server
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

// Get the comments
const comments = require('./comments.json');