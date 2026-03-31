const express = require("express")
const app = express()
const port = process.env.PORT || 80

app.get("/",(request,response)=>{
    response.send("Hello from NODE JS Application")    
});
app.listen(port,()=>{console.log("server is up and running on this port:" + port)});