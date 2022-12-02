const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique:true
    },
    
    desc: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: false,
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("Post", PostSchema)