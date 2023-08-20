import Profile from './Pages/Profile'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Root from './layouts/Root'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}>
      {/* <h1>Welcome to my App</h1>
      <LoginButton/>
      <LogoutButton/>
      <Profile/> */}
     
    </RouterProvider>
  )
}

export default App
