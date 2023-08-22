import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const Root = () => {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Root