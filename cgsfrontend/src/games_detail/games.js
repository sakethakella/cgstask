//game details page
import './games.css';
import Item2 from './item2';
import Item3 from './item3';
import {useEffect, useState } from 'react';

const Games = ({user}) => {
  //decalring hooks and variables used
  const[ck,setc]=useState(0);
  const[com,setcom]=useState([]);
  useEffect(()=>{fetch('http://localhost:8000/api/comments').then(res=>res.json()).then(d=>setcom(d))},[ck]);
  const [data,setdata]=useState([]);
  useEffect(()=>{fetch('http://localhost:8000/api/games').then(res=>res.json()).then(res1=>setdata(res1))},[]);
  const[game_name,setgame_name]=useState('');
  const[gameid,setgameid]=useState();
  const[comm,setcomm]=useState('');
  
  //declaring various conditions
    if(user==='Gamer'){
    return ( <>
    <div className='gameshead'>
        <h1>Hello {user}</h1>
        <p>Let's explore some fun games, Shall we?</p>
        <a href='#2'><button className='but_1'>Let's go</button></a>
        <p>To add comments please Login</p>
    </div>
    <div className='gamesdetail' id='2'>
        {data.map((val,i)=>(
            <Item2 data={val} key={i}/>
        ))}
    </div>
    <div className='comments'>
      <h1>Comments</h1>
      {com.map((val,i)=>(
        <Item3 data={val} key={i}/>
      ))}
    </div>
    </> );
    }
    
    else{
        return(
            <>
        <div className='gameshead'>
            <h1>Hello {user}</h1>
            <p>Let's explore some fun games</p>
            <a href='#2'><button className='but_1'>Let's go</button></a>
            <p></p>
            <a href='#3'><button className='but_1'>Add Comment</button></a>
        </div>
        <div className='gamesdetail' id='2'>
        {data.map((val,i)=>(
            <Item2 data={val} key={i}/>
        ))}
    </div>
    <div className='comments'>
      <h1>Comments</h1>
      {com.map((val,i)=>(
        <Item3 data={val} key={i}/>
      ))}
    </div>
    <div className="container678" id='3'>
  <form onSubmit={(e)=>{
    e.preventDefault();
    let d=ck;
    d++;
    const c={
      gameid:gameid,
      user_name:user,
      gamename:game_name,
      comment:comm
    };
    fetch('http://localhost:8000/api/comments',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(c)
    }).then(res=>console.log('added'));
    setc(d);
    console.log(ck);
  }}>
    <h2>Add Comment</h2>
    <div className="form-group">
      <label htmlFor="name">Game Name:</label>
      <input type="text" id="name" name="name" required="" placeholder='Game Name' onChange={(e)=>{setgame_name(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label htmlFor="gameid">Game id:</label>
      <input type="text" id="gameid" name="gameid" required="" placeholder='Game id' onChange={(e)=>{setgameid(e.target.value)}} />
    </div>
    <div className="form-group">
      <label htmlFor="message">Comment
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required=""
        defaultValue={""}
        placeholder='Write what you feel about the Game'
        onChange={(e)=>{setcomm(e.target.value);}}
      />
    </div>
    <button type="submit" className='but_1'>Send Commment</button>
  </form>
</div>
        </>
        );
    }
}
 
export default Games;