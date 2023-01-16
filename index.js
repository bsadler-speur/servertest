const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080


app.listen(PORT,() =>{
    console.log("Server is running")
});

app.post("/submit",(req,res)=>{
    console.log(res)
})

app.get("/",(req,res) => {
    console.log("Listening ")
})