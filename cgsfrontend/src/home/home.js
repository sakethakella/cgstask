//home page
import './home.css';
import Item from './item';
import { useEffect, useState } from 'react';

const Home = ({user}) => {
    //declaring hooks 
    const[data1,setdata1]=useState([]);
    useEffect(()=>{fetch('http://localhost:8000/api/games').then(res=>res.json()).then(res1=>setdata1(res1))},[]);
    //games data fetched from the backend

    return ( <>
      <div className='home'></div>
      <div className='homee'>
      <div className='homeel'>
            <h2>Welcome {user}</h2>
            <a href='#1'><button className='but_2'>Click to Explore</button></a>
            <h4 className='homeel1'>Explore various Games Available</h4>
        </div>
        </div>
        <div className="item" id='1'>
        {data1.map((val,i)=>(
            <Item data={val} key={i}/>
        ))}
        </div>
    </> );
}
 
export default Home;