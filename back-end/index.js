let express=require('express');
let app=express();
let hrroutes=require('./routes/hr_routes');
app.use("/api/hr",hrroutes);
//localhost:3000/api/hr/viewemployees 
app.post("/register",(req,res)=>{
    res.send("register route called");
});
//localhost:3000/viewstudent
app.get("/viewstudent",(req,res)=>{
    res.send("view student page called");
})

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})