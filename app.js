import express from "express";
import mongoose from 'mongoose';
import router from "./routes/User-routes";
import blogrouter from "./routes/Blog-routes";


const app= express();


app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogrouter);


mongoose.connect('mongodb+srv://admin:rjfgLAbYDw99UoAE@cluster0.teveqm9.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0'
)
.then(()=>app.listen(8000))
.then(()=>
    console.log("connected to database and listening to port 8000")

)
.catch((err)=>console.log(err));

//pass rjfgLAbYDw99UoAE user admin

