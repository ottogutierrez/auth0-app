import Profile from './Pages/Profile'
import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import Root from './layouts/Root'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Route>
  ))
  return (
    <div className='App'>
    <RouterProvider router={router}/> 
    </div>
  )
}

export default App
