var express = require('express')
  , path = require('path');

var app = express();

app.get("/:page([a-z0-9]+)", function(req,res){
    res.send(req.params.page);
})

app.post("/:page([a-z0-9]+)", function(req,res){
    res.send(req.params.page);
})

module.exports = app;

