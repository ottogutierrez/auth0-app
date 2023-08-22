import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import Login from './LoginButton'
import Logout from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import {FaCircleUser} from 'react-icons/fa6'

const Navbar = () => {
    const {isAuthenticated} = useAuth0()
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    return (
        <>
            <nav>
                <Link to='/' className='title'>Auth0 Test App</Link>
                <ul>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    {isAuthenticated && (<li><NavLink to='/profile'>Profile</NavLink></li>)}
                </ul>
                <div className='auth-nav'>
                    <div 
                        className="auth-btn"
                        onClick={()=>setIsMenuOpen(!isMenuOpen)}
                        role='button'
                        tabIndex={3}
                        style={{color:'white'}}
                    >
                        <FaCircleUser size={32}/>
                    </div>
                </div>
                
            </nav>
            {isMenuOpen && 
                <div className="menu">
                    {isAuthenticated? (<Logout/>):(<Login/>)}
                </div>
            }
        </>
  )
}

export default Navbar