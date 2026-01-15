const express=require("express")
const path =require("path")
const app=express()

//because of using static public folder will server html pages a static server no need to assign the route

app.use(express.static(path.join(__dirname,"public")))



/*
app.get("/",(req,res)=>{
  return res.sendFile(path.join("index.html"))
})

app.get("/about",(req,res)=>{
 return res.sendFile(path.join("abouts.html"))
})
app.get("/contact",(req,res)=>{
 return res.sendFile(path.join("contactus.html"))
})*/

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
