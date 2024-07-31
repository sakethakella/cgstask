//sign up page

import './login.css';
import { useState } from 'react';

const Signup = () => {
    //decalring hooks and variables
    const[username1,setusername1]=useState('');
    const[password1,setpassword1]=useState('');
    let us;
    let pas;
    
    return (
        <div className="loginpage">
        <div className="login-card">
        <h2>Sign-up</h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={(e)=>{
            const signup={
              username:username1,
              password:password1
            };
            fetch('http://localhost:8000/api/login',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(signup)
            }).then((res)=>{});
        }}>
          <input type="text" placeholder="Username"  onChange={(e)=>{us=e.target.value; setusername1(us);}}/>
          <input type="password" placeholder="Password" onChange={(e)=>{pas=e.target.value;setpassword1(pas);}} />
          <button type="submit">SIGNUP</button>
        </form>
      </div>
      </div>
     );
}
 
export default Signup;