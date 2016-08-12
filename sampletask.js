var express = require('express');
var app = express();

app.use(express.static('/home/shruti/project/task1/'));

//app.get('/', function (req, res) {

//  res.sendFile('/home/shruti/project/sampleapp/pic.jpeg');
  //res.sendFile('/home/shruti/project/task1/newform.html');
//  res.send('Hello World!');

//});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

/*app.post('/', function (req, res) {
//  res.send('Got a POST request');
    res.sendFile('/home/shruti/project/sampleapp/post.html');



});*/
