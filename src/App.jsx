import './App.css'
import LoginButton from './components/login'
import LogoutButton from './components/logout'
import Profile from './components/profile'

function App() {
  return (
    <>
      <h1>Welcome to my App</h1>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
      {import.meta.env.VITE_AUTH0_CLIENT_ID}
     
    </>
  )
}

export default App
