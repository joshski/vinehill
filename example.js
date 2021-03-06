
var express = require('express');
var app = express();

app.get('/weather/:city', (req, res) => {
  res.json({
    city: req.params.city,
    temp: '22C'
  });
});


// connect your app to a host name
var vinehill = new (require('.'))();
vinehill.add('http://weather.com', app);
vinehill.start();


var httpism = require('httpism/browser');
httpism.get('http://weather.com/weather/london').then(response => {
  console.log(response.body.temp);
});
