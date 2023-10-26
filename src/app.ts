import express from "express";
import userRoute from "./router/user.js";
const app=express();

app.use("/user",userRoute)


app.get("/",(req,res)=>{
    res.send("lol")
})

app.listen(4000,()=>{
  
    console.log("server listenings on 4000");
    
})