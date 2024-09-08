const express=require("express");
const app=express();
const port=8080;
app.listen(port,()=>{
    console.log(`app is listning ${port }`);
});
app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});

    
});
app.get("/ig/:username",(req,res)=>{
   let {username}= req.params;
   const follower=["shams","ashad","umar","shad"];
   res.render("insta.ejs",{username, follower});
})