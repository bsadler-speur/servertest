const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080


app.listen(PORT,() =>{
    console.log("Server is running")
});

app.post("/submit",(req,res)=>{
    console.log("Body",req.body)
    console.log("Params",req.params)
    console.log("Headers",req.headers)
    console.log("Request",req)

    res.send(req.params)

})

app.get("/",(req,res) => {
    res.send("<html><header>Listening </header></html>")
})