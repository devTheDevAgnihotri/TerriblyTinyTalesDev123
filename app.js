var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cors=require("cors");

const { json } = require('express')
var app = express();

app.use(cors());

app.use(require('./routes/talesApi'))

if (process.env.NODE_ENV == "production") {
  app.use(express.static('tales/build'))
  const path = require('path')
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'tales', 'build', 'index.html'))
  })
}

module.exports = app;
