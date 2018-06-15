'use strict';

var express = require('express');
var cors = require('cors');
var busboy = require('connect-busboy');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.use(busboy());

app.use(function(req, res) {
  req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    console.log("file",fieldname)
  }); 
  res.status(200).send("ok");
});

/*
app.post('/api/fileanalyse',(req,res) => {
  console.log("upfile",req.upfile)
  res.status(200).send(req.upfile)
})
*/

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
