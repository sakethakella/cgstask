//importing all required frameworks and modules
const express=require('express');
const cors = require('cors');
const app=express();
const mongoose=require('mongoose');
const Comment=require('./model');
const dburl='mongodb+srv://dbuser:dbuser1234@cluster0.skhcd5e.mongodb.net/Practice?retryWrites=true&w=majority&appName=Cluster0';
const Game=require('./games');
const Login=require('./login');

//middlewares
app.use(cors());
app.use(express.json());

//making moongoose to connect mongodb
mongoose.connect(dburl).then(()=>{
    console.log('mongoose connected');
}).catch((err)=>{console.log(err);});

//starting the server at port 8000
app.listen(8000);

//handling get request for /api/games
app.get('/api/games',(req,res)=>{
  Game.find().then(resu=>res.send(resu)).catch(err=>console.log(err));
});

//handling get request for /api/games/id
app.get('/api/games/:id',(req,res)=>{
   const id=req.params.id;
   Game.find({gameid:id}).then(resu=>res.send(resu));
});

//handling get request for /api/comments/:id
app.get('/api/comments/:id',(req,res)=>{
   const id=req.params.id;
   Comment.find({gameid:id}).then(resu=>res.send(resu));
});

//handling get request for /api/comments
app.get('/api/comments',(req,res)=>{
    Comment.find().then(resu=>res.send(resu));
});

//handling get request for /api/login
app.get('/api/login',(req,res)=>{
   const login=new Login({
    username:'saketh',
    password:'saketh'
   });
   login.save().then(resu=>res.send(resu)).catch(err=>res.send(err));
});

//handling get request for /api/games/:us
app.get('/api/login/:us',(req,res)=>{
    const us=req.params.us;
    Login.find({username:us}).then(resu=>res.send(resu)).catch(err=>console.log(err));
});

//handling post request for /api/comments
app.post('/api/comments',(req,res)=>{
    const log=new Comment(req.body);
    log.save().then(res1=>console.log('added to db'));
});

//handling post request for /api/login
app.post('/api/login',(req,res)=>{
   const sign=new Login(req.body);
   sign.save().then(resu=>console.log('added'));
});