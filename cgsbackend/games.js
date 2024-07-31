//schema and model for games section created
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const gameschema=new Schema({
    gameid:{
        type:Number,
        required:true
    },
    tag:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    src:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    download:{
        type: String,
        required:true
    },
    loginrequired:{
        type: Boolean,
        required:true
    }
},{timestamps:true});

const Game=mongoose.model('Game',gameschema);
module.exports=Game;
//model exported