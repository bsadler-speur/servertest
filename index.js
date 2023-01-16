const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080

app.use(express.json())

app.listen(PORT,() =>{
    console.log("Server is running")
});

app.post("/submit",(req,res)=>{
    console.log(req)
    res.send(req)

})

app.get("/",(req,res) => {
    res.send("<html><header>Listening </header></html>")
})