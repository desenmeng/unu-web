/**
 * Created by mdemo on 2014/7/29.
 */
var express = require('express');
var unu = require('unu');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});
app.get('/unu', function(req, res){
    var url = req.query.url;
    var options = req.query.options;
    unu(url,options,function(error,css){
        if(!error){
            res.status(200).json(css);            
        }else{
            res.status(500).json(error);
        }
    });
});
app.listen(process.env.PORT||8080);