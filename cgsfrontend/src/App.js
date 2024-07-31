import { BrowserRouter as Router,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import Games from "./games_detail/games";
import Login from "./Login/login";
import Signup from "./Login/signup";
import { useState } from "react";

function App() {
  const[user,setuser]=useState('Gamer');
  const changeuser=(val)=>{
    setuser(val);
  }
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'><Home user={user}/></Route>
        <Route path='/games_detail/games'><Games user={user}/></Route>
        <Route path='/Login/login'><Login changeuser={changeuser} user1={user}/></Route>
        <Route path='/Login/signup'><Signup /></Route>
      </Switch>
    </Router>
  );
}

export default App;
