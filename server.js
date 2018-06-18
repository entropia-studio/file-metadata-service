'use strict';

var express = require('express');
var cors = require('cors');

var busboyBodyParser = require('busboy-body-parser');


// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.use(busboyBodyParser());

app.post('/api/fileanalyse',(req,res) => {
  let jsonData =  {"result" : "file doesn't exixt"};
  console.log(req.files)
  if (req.files) {
    jsonData = {"name" : req.files.upfile.name,
                "type" : req.files.upfile.mimetype,
                "size" : req.files.upfile.size}
    }  
  
  res.json(jsonData);     
})


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
