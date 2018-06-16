var express = require('express')
  , path = require('path');

var app = express();



app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (request,response)=>{
   // response.send('<html><h1>Hello Express! How are you Doing</h1></html>');
   response.render('home.hbs' , {
    pageTitle : "Home Page" ,
    welcomeText : "Welcome to the home page",
    year : new Date().getFullYear()
});
});

app.get('/home', (request,response)=>{
    response.send('<html><h1>Hello Express! How are you Doing</h1></html>');
 });

 app.get('/about', (request,response)=>{
    response.render('about.hbs' , {
        pageTitle : "About Page" ,
        year : new Date().getFullYear()
    });
 });

 app.get('/bad', (request,response)=>{
    response.send({
        error: 'Error Message is send',
        code : '500'
   });
 });

 module.exports = app;