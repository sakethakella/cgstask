//navbar component created

import './navbar.css';
import {Link} from 'react-router-dom';//importing link from react-router dom

const Navbar = () => {
    return ( 
        <>
        <div className='navbar'>
            <div className='navclass'>
               <div className='navel'><img src='https://t4.ftcdn.net/jpg/04/68/31/61/360_F_468316190_CjhrB55W6Nkosin4F1Cn3GOLGVdc5Un1.jpg' alt='' className='img_1'/></div>
            </div>
            <div className='navclass'>
                <div className='navel'><Link to ='/'>Home</Link></div>
                <div className='navel'><Link to='/games_detail/games'>Games Details</Link></div>
            </div>
            <div className='navclass'>
                <div className='navel'><Link to='/Login/login'><button className='but_1'>Login</button></Link></div>
                <div className='navel'><Link to='/Login/signup'><button className='but_1'>Sign up</button></Link></div>
            </div>
        </div>
        </>
     );
}

export default Navbar;
//navbar exported