//login page

import { useState } from 'react';//importing usestate hook
import './login.css';

const Login = ({changeuser,user1}) => {
        //declaring various variables and hooks
        const[username,setusername]=useState(user1);
        const[user12,setuser12]=useState('');
        const[pas1,setpas1]=useState('');
        const[password,setpassword]=useState('');
        let us;
        let pas;
        
        changeuser(username);
        //checking various condtions
        
        if(username==='Gamer'&&password===''){
        return ( 
            <div className="loginpage">
            <div className="login-card">
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            <form className="login-form" onSubmit={(e)=>{
                e.preventDefault();
                console.log('user1',user12);
                console.log(`http://localhost:8000/api/login/:${user12}`);
                fetch(`http://localhost:8000/api/login/${user12}`).then(res=>res.json()).then((res1)=>{
                  console.log(res1);
                  
                  if(((res1.length)!==0)&&(res1[0].password===pas1)){
                    setusername(user12);
                    setpassword(pas1);
                  }
                  else{
                    alert('wrong Credentials');
                  }
                
                });
            }}>
              <input type="text" placeholder="Username"  onChange={(e)=>{us=e.target.value;setuser12(us);}}/>
              <input type="password" placeholder="Password" onChange={(e)=>{pas=e.target.value;setpas1(pas);}} />
              <button type="submit">LOGIN</button>
            </form>
          </div>
          </div>
         );
        }
        else if(username===user1){
            return(
                <>
                <div className="loginpage">
                <div className="login-card">
                  <h2>Welcome</h2>
                  <h3>{username}</h3>
                  <p>Enjoy Gaming</p>    
                </div>
                </div>
                </>
            )
        }
}
 
export default Login;