//schema and model created for comments section 
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const commentschema=new Schema({
    gameid:{
        type:Number,
        required:true
    },
    user_name:{
        type:String,
        required:true
    },
    gamename:{
        type:String,
        required:true
    },
    comment:{
        type: String,
        required: true
    }
},{timestamps:true});

const Comment=mongoose.model('Comment',commentschema);
module.exports=Comment;
//comment model exported
