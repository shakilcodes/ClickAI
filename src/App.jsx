import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Compnents/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
