const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
     
}).then(()=>{
    console.log("Connected to the database");
}).catch((err) =>{
    console.log(err);
})