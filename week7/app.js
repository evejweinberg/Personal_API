//'hello world' to be matched with a database soon
//mongoDB database backend, uing mongoose
//we could include the facebook oAuth module here too


var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/eve', function(req,res){
  res.send('hello eve!')
})


app.get('/api/find/pets', function(req,res){

  var pets = [
    {
      name: 'Trevor',
      type: 'dog'
    },

    {
      name: 'Lillie',
      type: 'cat'
    }
  ]

  res.json(pets)
  //req is the request coming in
  //res in going out
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


app.get('/webpage', function (req,res){
  res.render('<p>Eve hurrrrr from Node</p>')
  res.send('success')
})
