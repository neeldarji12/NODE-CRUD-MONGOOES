const express = require('express');
const db = require('./config/db');
const app = express();
const U_Router = require('./Routers/userRouter');
app.use(express.json());


app.use("/user",U_Router);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})