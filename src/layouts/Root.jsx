import { Outlet,NavLink } from "react-router-dom"
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'


const Root = () => {
  return (
    <>
    <header>
        <h1>Auth0 Test App</h1>
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
        </nav>
        <div>
            <LoginButton/>
            <LogoutButton/>
        </div>
    </header>
    <main>
        <h2>This is the Root main</h2>
        <Outlet/>
    </main>
    </>
  )
}

export default Root