const fs = require("fs");
//http-ify

app.get("/")
fs.readFile("a.txt", function(err,data){
    console.log(data);
})