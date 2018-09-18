var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.get("/", function(request, response){
    // response.send("welcome to honeywell");
    response.sendFile(__dirname+"/step12-classes-traceur.html");
});
app.listen(3000);
console.log("webserver is now live on localhost:3000");