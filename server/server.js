const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const multer = require('multer');
const upload = multer({dest : __dirname + '/uploads/'});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/',upload.single('file'),(req,res) => {
    if(req.file){
      console.log(req.file.size);
      res.send({size : req.file.size});
    }
    else{
      res.status(404).send();
    }
});

app.listen('3000',() => {
  console.log("Server started");
});
