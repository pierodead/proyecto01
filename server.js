var express = require ('express');

var logger=require('morgan');

var bodyParser =require('body-parser');
var path=require('path');
var app = express();

app.get('/',function(request,response){
  	response.sendFile("login.html",{root:path.join(__dirname,'./views')});
});
app.set('view engine','ejs');

app.use(express.static('views'));
app.set('views',__dirname + '/views');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended :true}));
app.use(logger('dev'));


app.post('/',function(request,response){
     
});
var port = process.env.port || 8080
app.listen(port,function(){
	console.log('App running on port '+port);
});
