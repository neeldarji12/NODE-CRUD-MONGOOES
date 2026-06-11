const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://neeldarji1431_db_user:neel123@cluster0.ba1ntei.mongodb.net/?appName=Cluster0")

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected to database")
})
