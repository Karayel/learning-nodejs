var http =require('http')
var fs = require('fs');
var inStream = require('in-stream')
var map = require('through2-map') 

var server = http.createServer(function(req,res){
	if (req.method != 'POST')  
    	return res.end('send me a POST\n') 
	req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();  
    })).pipe(res) 
})
server.listen(process.argv[2]);