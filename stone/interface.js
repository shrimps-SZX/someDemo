const express = require('express');
const app = express();

app.get('/stone/home',(req,res)=>{
	console.log("chenggong");
	res.send("hello world");

})
app.listen(80, '127.0.0.1');