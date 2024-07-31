//schema and model for login
const mongoose=require('mongoose');

const schema=mongoose.Schema;

const loginschema=new schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

const Login=mongoose.model('Login',loginschema);
module.exports=Login;
//login model exported